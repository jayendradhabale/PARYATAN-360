import cors from 'cors';
import express from 'express';
import { config } from './config/env.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';
import authRoutes from './routes/authRoutes.js';
import insightsRoutes from './routes/insightsRoutes.js';
import tourismRoutes from './routes/tourismRoutes.js';
import { health } from './controllers/healthController.js';

const app = express();

app.use(cors({ origin: config.frontendOrigin }));
app.use(express.json({ limit: '1mb' }));
app.get('/api/health', health);
app.use('/api/auth', authRoutes);
app.use('/api', tourismRoutes);
app.use('/api', insightsRoutes);
app.use(notFound);
app.use(errorHandler);

export default app;
