import jwt from 'jsonwebtoken';
import { config } from '../config/env.js';
import { User } from '../models/User.js';

export function createSession(user) {
  return { token: jwt.sign({ sub: user.id, role: user.role }, config.jwtSecret, { expiresIn: '7d' }), user: user.toJSON(), role: user.role };
}

export async function registerAccount({ name, email, role }) {
  const normalisedEmail = email.trim().toLowerCase();
  if (await User.findByEmail(normalisedEmail)) {
    const error = new Error('An account with this email already exists.');
    error.statusCode = 409;
    throw error;
  }
  const user = await User.create({ name: name.trim(), email: normalisedEmail, role, password: 'demo-password' });
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
