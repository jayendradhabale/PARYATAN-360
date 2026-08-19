import app from './src/app.js';
import { connectDatabase } from './src/config/database.js';
import { config } from './src/config/env.js';
import { ensureDemoAccounts } from './src/services/authService.js';

try {
	await connectDatabase();
	await ensureDemoAccounts();
	app.listen(config.port, () => console.log(`PARYATAN 360 backend listening on http://localhost:${config.port}`));
} catch (error) {
	console.error('MongoDB connection failed:', error.message);
	process.exitCode = 1;
}
