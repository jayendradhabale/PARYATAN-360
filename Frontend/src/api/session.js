const SESSION_KEY = 'paryatan360_session';

export function saveSession(session) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function getSession() {
  const saved = localStorage.getItem(SESSION_KEY);
  return saved ? JSON.parse(saved) : null;
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}
