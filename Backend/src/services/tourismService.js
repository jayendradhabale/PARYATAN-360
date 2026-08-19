import { recommendations } from '../data/tourismData.js';
import { Trip } from '../models/Trip.js';

export async function createPlan(userId, preferences) {
  return Trip.planForUser(userId, preferences);
}

export async function getCurrentTrip(userId) {
  return Trip.findOrCreateByUserId(userId);
}

export async function addTripStop(userId, { name, title, time = 'Flexible', detail = 'Recommended stop', status = 'Suggested', id }) {
  const stopName = name || title;
  return Trip.addStop(userId, { id, time, name: stopName.trim(), detail, status });
}

export async function removeTripStop(userId, stopId) {
  return Trip.removeStop(userId, stopId);
}

export function getRecommendations(destination) {
  return { destination: destination || 'Jaipur', recommendations };
}
