import { Router } from 'express';
import { addStop, currentTrip, deleteStop, planTrip, recommendations } from '../controllers/tourismController.js';
import { authenticate, authorize } from '../middleware/auth.js';
import { requireFields, validateTripPlan } from '../middleware/validate.js';

const router = Router();
const touristOnly = [authenticate, authorize('Tourist')];
router.post('/trips/plan', ...touristOnly, requireFields('destination'), validateTripPlan, planTrip);
router.get('/trips/current', ...touristOnly, currentTrip);
router.post('/trips/current/stops', ...touristOnly, requireFields('name'), addStop);
router.delete('/trips/current/stops/:stopId', ...touristOnly, deleteStop);
router.get('/destinations/recommendations', authenticate, recommendations);
export default router;
