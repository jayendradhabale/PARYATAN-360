import { Router } from 'express';
import { businessInsights, governmentInsights, hotelInsights } from '../controllers/insightsController.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = Router();
router.get('/government/insights', authenticate, authorize('Government'), governmentInsights);
router.get('/hotel/insights', authenticate, authorize('Hotel'), hotelInsights);
router.get('/business/insights', authenticate, authorize('Business'), businessInsights);
export default router;
