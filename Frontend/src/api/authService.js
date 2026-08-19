import apiClient from './apiClient';

export function login(credentials) {
  return apiClient('/auth/login', { method: 'POST', body: credentials });
}

export function register(account) {
  return apiClient('/auth/register', { method: 'POST', body: account });
}
