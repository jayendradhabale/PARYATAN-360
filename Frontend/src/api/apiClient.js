const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

async function apiClient(path, { method = 'GET', body, token, signal } = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    signal,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });

  const isJson = response.headers.get('content-type')?.includes('application/json');
  const data = isJson ? await response.json() : null;

  if (!response.ok) {
    throw new Error(data?.message || 'Something went wrong. Please try again.');
  }

  return data;
}

export default apiClient;
