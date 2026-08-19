import apiClient from './apiClient';

export function createTripPlan(preferences, token) {
  return apiClient('/trips/plan', { method: 'POST', body: preferences, token });
}

export function getDestinationRecommendations(destination, token) {
  return apiClient(`/destinations/recommendations?destination=${encodeURIComponent(destination)}`, { token });
}

export function getCurrentTrip(token) {
  return apiClient('/trips/current', { token });
}

export function addTripStop(stop, token) {
  return apiClient('/trips/current/stops', { method: 'POST', body: stop, token });
}

export function removeTripStop(stopId, token) {
  return apiClient(`/trips/current/stops/${encodeURIComponent(stopId)}`, { method: 'DELETE', token });
}

export function getGovernmentInsights(token) {
  return apiClient('/government/insights', { token });
}

export function getHotelInsights(token) {
  return apiClient('/hotel/insights', { token });
}

export function getBusinessInsights(token) {
  return apiClient('/business/insights', { token });
}
