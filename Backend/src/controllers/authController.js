import { loginAccount, registerAccount } from '../services/authService.js';

export async function register(request, response, next) {
  try {
    response.status(201).json(await registerAccount(request.body));
  } catch (error) {
    next(error);
  }
}

export async function login(request, response, next) {
  try {
    response.json(await loginAccount(request.body));
  } catch (error) {
    next(error);
  }
}
