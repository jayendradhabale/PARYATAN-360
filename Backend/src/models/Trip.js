import crypto from 'node:crypto';
import mongoose from 'mongoose';
import { isDatabaseConnected } from '../config/database.js';

const tripsByUserId = new Map();
const stopSchema = new mongoose.Schema({ id: String, time: String, name: String, detail: String, status: String }, { _id: false });
const daySchema = new mongoose.Schema({ label: String, date: String, stops: { type: [stopSchema], default: [] } }, { _id: false });
const tripSchema = new mongoose.Schema({ userId: { type: String, required: true, unique: true, index: true }, title: String, destination: String, summary: String, days: { type: [daySchema], default: [] } }, { timestamps: true });
const TripDocument = mongoose.models.Trip || mongoose.model('Trip', tripSchema);

function defaultTrip() {
  return {
    title: 'Your Jaipur itinerary', destination: 'Jaipur',
    days: [
      { label: 'Day 1 · Heritage and local flavours', date: 'Friday, 12 September', stops: [{ id: 'amber-fort', time: '08:30', name: 'Amber Fort', detail: 'Guided heritage visit · Low crowd window', status: 'Confirmed' }, { id: 'amer-kitchen', time: '13:00', name: 'Amer local kitchen', detail: 'Traditional Rajasthani lunch', status: 'Confirmed' }, { id: 'jal-mahal', time: '17:30', name: 'Jal Mahal viewpoint', detail: 'Sunset photo stop', status: 'Suggested' }] },
      { label: 'Day 2 · City culture', date: 'Saturday, 13 September', stops: [{ id: 'city-palace', time: '09:30', name: 'City Palace', detail: 'Museum and royal courtyard', status: 'Confirmed' }, { id: 'bapu-bazaar', time: '14:30', name: 'Bapu Bazaar', detail: 'Handicrafts and local shopping', status: 'Suggested' }, { id: 'jawahar-circle', time: '18:00', name: 'Jawahar Circle', detail: 'Evening food and cultural walk', status: 'Suggested' }] },
    ],
  };
}

export class Trip {
  static async findOrCreateByUserId(userId) {
    if (isDatabaseConnected()) {
      let trip = await TripDocument.findOne({ userId }).lean();
      if (!trip) trip = (await TripDocument.create({ userId, ...defaultTrip() })).toObject();
      delete trip._id;
      delete trip.__v;
      return trip;
    }
    if (!tripsByUserId.has(userId)) tripsByUserId.set(userId, defaultTrip());
    return tripsByUserId.get(userId);
  }

  static async planForUser(userId, { destination, days, budget, interests }) {
    const trip = await Trip.findOrCreateByUserId(userId);
    trip.destination = destination.trim();
    trip.title = `${days}-day ${trip.destination} discovery plan`;
    trip.summary = `Balanced for ${interests.length ? interests.join(' and ') : 'your chosen interests'}, within ${budget || 'your budget'}.`;
    if (isDatabaseConnected()) await TripDocument.findOneAndUpdate({ userId }, trip);
    return { title: trip.title, summary: trip.summary, stops: trip.days.flatMap((day) => day.stops).slice(0, Number(days) * 3) };
  }

  static async addStop(userId, stop) {
    const savedStop = { id: stop.id || crypto.randomUUID(), ...stop };
    if (isDatabaseConnected()) {
      await TripDocument.findOneAndUpdate({ userId }, { $push: { 'days.0.stops': savedStop } }, { upsert: true });
      return savedStop;
    }
    const trip = await Trip.findOrCreateByUserId(userId);
    trip.days[0].stops.push(savedStop);
    return savedStop;
  }

  static async removeStop(userId, stopId) {
    const trip = await Trip.findOrCreateByUserId(userId);
    let removed = false;
    trip.days.forEach((day) => { const before = day.stops.length; day.stops = day.stops.filter((stop) => stop.id !== stopId && stop.name !== stopId); removed ||= before !== day.stops.length; });
    if (removed && isDatabaseConnected()) await TripDocument.findOneAndUpdate({ userId }, { days: trip.days });
    return removed;
  }
}
