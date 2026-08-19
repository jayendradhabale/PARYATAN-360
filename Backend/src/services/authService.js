import jwt from 'jsonwebtoken';
import { config } from '../config/env.js';
import { User } from '../models/User.js';

export function createSession(user) {
  return { token: jwt.sign({ sub: user.id, role: user.role }, config.jwtSecret, { expiresIn: '7d' }), user: user.toJSON(), role: user.role };
}

export async function registerAccount({ name, email, password, role }) {
  const normalisedEmail = email.trim().toLowerCase();
  if (await User.findByEmail(normalisedEmail)) {
    const error = new Error('An account with this email already exists.');
    error.statusCode = 409;
    throw error;
  }
  const user = await User.create({ name: name.trim(), email: normalisedEmail, role, password });
  return createSession(user);
}

export async function loginAccount({ email, password, role }) {
  const user = await User.findByEmail(email);
  if (!user || user.role !== role || !(await User.verifyPassword(user, password))) {
    const error = new Error('Email, password or role is incorrect.');
    error.statusCode = 401;
    throw error;
  }
  return createSession(user);
}

export async function ensureDemoAccounts() {
  const accounts = [
    { name: 'PARYATAN Admin', email: config.demoAdminEmail, role: 'Government', password: config.demoAdminPassword },
    { name: 'Demo Tourist', email: config.demoUserEmail, role: 'Tourist', password: config.demoUserPassword },
  ];

  for (const account of accounts) {
    if (!await User.findByEmail(account.email)) await User.create(account);
  }
}
