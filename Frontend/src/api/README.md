# API integration

Set `VITE_API_BASE_URL` in a local `.env` file. The default is `http://localhost:5000/api`.

Use `apiClient` for all HTTP calls. It automatically serialises JSON, adds an optional bearer token, and turns failed responses into readable errors.

Service files map frontend actions to backend endpoints:

- `authService.js` — login and registration
- `tourismService.js` — trip planning, recommendations and dashboard insights
