import 'dotenv/config';

export const config = {
  port: Number(process.env.PORT || 5000),
  mongoUri: process.env.MONGODB_URI || '',
  mongoDnsServers: (process.env.MONGO_DNS_SERVERS || '').split(',').map((server) => server.trim()).filter(Boolean),
  mongoConnectRetries: Number(process.env.MONGO_CONNECT_RETRIES || 3),
  mongoRetryDelayMS: Number(process.env.MONGO_RETRY_DELAY_MS || 1500),
  mongoServerSelectionTimeoutMS: Number(process.env.MONGO_SERVER_SELECTION_TIMEOUT_MS || 8000),
  jwtSecret: process.env.JWT_SECRET || 'paryatan-360-development-secret',
  frontendOrigin: process.env.FRONTEND_ORIGIN || 'http://localhost:5173',
  nodeEnv: process.env.NODE_ENV || 'development',
  demoAdminEmail: process.env.DEMO_ADMIN_EMAIL || 'admin@paryatan360.com',
  demoAdminPassword: process.env.DEMO_ADMIN_PASSWORD || 'Admin@12345',
  demoUserEmail: process.env.DEMO_USER_EMAIL || 'user@paryatan360.com',
  demoUserPassword: process.env.DEMO_USER_PASSWORD || 'User@12345',
};
