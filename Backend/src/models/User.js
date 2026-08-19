import bcrypt from 'bcryptjs';
import crypto from 'node:crypto';
import mongoose from 'mongoose';
import { isDatabaseConnected } from '../config/database.js';

const usersByEmail = new Map();
const usersById = new Map();
const validRoles = ['Tourist', 'Hotel', 'Business', 'Government'];

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  role: { type: String, required: true, enum: validRoles },
  passwordHash: { type: String, required: true, select: false },
}, { timestamps: true });

const UserDocument = mongoose.models.User || mongoose.model('User', userSchema);

export class User {
  constructor({ id = crypto.randomUUID(), name, email, role, passwordHash, document }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
    this.passwordHash = passwordHash;
    this.document = document;
  }

  toJSON() { return { id: this.id, name: this.name, email: this.email, role: this.role }; }

  static fromDocument(document) {
    return new User({ id: document._id.toString(), name: document.name, email: document.email, role: document.role, passwordHash: document.passwordHash, document });
  }

  static async create({ name, email, role, password }) {
    const passwordHash = await bcrypt.hash(password, 10);
    if (isDatabaseConnected()) return User.fromDocument(await UserDocument.create({ name, email, role, passwordHash }));
    const user = new User({ name, email, role, passwordHash });
    usersByEmail.set(user.email, user);
    usersById.set(user.id, user);
    return user;
  }

  static async findByEmail(email) {
    const normalisedEmail = email.trim().toLowerCase();
    if (isDatabaseConnected()) {
      const document = await UserDocument.findOne({ email: normalisedEmail }).select('+passwordHash');
      return document ? User.fromDocument(document) : null;
    }
    return usersByEmail.get(normalisedEmail);
  }

  static async findById(id) {
    if (isDatabaseConnected()) {
      const document = await UserDocument.findById(id).select('+passwordHash');
      return document ? User.fromDocument(document) : null;
    }
    return usersById.get(id);
  }

  static async verifyPassword(user, password) { return Boolean(user) && bcrypt.compare(password, user.passwordHash); }
  static isValidRole(role) { return validRoles.includes(role); }
}
