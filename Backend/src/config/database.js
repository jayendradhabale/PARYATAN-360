import dns from 'node:dns';
import mongoose from 'mongoose';
import { config } from './env.js';

if (config.mongoDnsServers.length) dns.setServers(config.mongoDnsServers);

export async function connectDatabase() {
  if (!config.mongoUri) {
    console.warn('MONGODB_URI is not configured; using in-memory demo storage.');
    return false;
  }

  let lastError;
  for (let attempt = 1; attempt <= config.mongoConnectRetries; attempt += 1) {
    try {
      await mongoose.connect(config.mongoUri, {
        serverSelectionTimeoutMS: config.mongoServerSelectionTimeoutMS,
      });
      console.log('MongoDB connected.');
      return true;
    } catch (error) {
      lastError = error;
      if (attempt < config.mongoConnectRetries) {
        console.warn(`MongoDB connection attempt ${attempt} failed; retrying...`);
        await new Promise((resolve) => setTimeout(resolve, config.mongoRetryDelayMS));
      }
    }
  }

  const error = new Error(`MongoDB could not connect after ${config.mongoConnectRetries} attempts: ${lastError?.message || 'unknown error'}`);
  error.cause = lastError;
  throw error;
}

export function isDatabaseConnected() {
  return mongoose.connection.readyState === 1;
}

export async function disconnectDatabase() {
  if (mongoose.connection.readyState !== 0) await mongoose.disconnect();
}
