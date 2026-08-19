import { createPlan, getCurrentTrip, addTripStop, removeTripStop, getRecommendations } from '../services/tourismService.js';

export async function planTrip(request, response, next) {
  try {
    response.json({ plan: await createPlan(request.user.sub, { ...request.body, interests: Array.isArray(request.body.interests) ? request.body.interests : [] }) });
  } catch (error) {
    next(error);
  }
}

export async function currentTrip(request, response, next) {
  try {
    response.json(await getCurrentTrip(request.user.sub));
  } catch (error) {
    next(error);
  }
}

export async function addStop(request, response, next) {
  try {
    const stop = await addTripStop(request.user.sub, request.body);
    response.status(201).json({ stop, trip: await getCurrentTrip(request.user.sub) });
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
}

export async function deleteStop(request, response, next) {
  try {
    if (!await removeTripStop(request.user.sub, request.params.stopId)) return response.status(404).json({ message: 'Trip stop was not found.' });
    response.json({ trip: await getCurrentTrip(request.user.sub) });
  } catch (error) {
    next(error);
  }
}

export function recommendations(request, response) {
  response.json(getRecommendations(request.query.destination));
}
