import { insights } from '../data/tourismData.js';

export function governmentInsights(request, response) {
  response.json(insights.government);
}

export function hotelInsights(request, response) {
  response.json(insights.hotel);
}

export function businessInsights(request, response) {
  response.json(insights.business);
}
