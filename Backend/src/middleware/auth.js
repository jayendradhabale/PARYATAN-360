import jwt from 'jsonwebtoken';
import { config } from '../config/env.js';

export function authenticate(request, response, next) {
  const header = request.get('authorization');
  if (!header?.startsWith('Bearer ')) return response.status(401).json({ message: 'A valid session is required.' });
  try {
    request.user = jwt.verify(header.slice(7), config.jwtSecret);
    return next();
  } catch {
    return response.status(401).json({ message: 'Your session has expired. Please sign in again.' });
  }
}

export function authorize(...roles) {
  return (request, response, next) => roles.includes(request.user.role) ? next() : response.status(403).json({ message: 'This workspace is not available for your role.' });
}
