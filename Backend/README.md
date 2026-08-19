# PARYATAN 360 Backend

Layered Express API for the PARYATAN 360 frontend. The current persistence layer is in-memory so the project runs without a database; accounts and trips reset when the server restarts.

## Run locally

```powershell
cd Backend
npm install
Copy-Item .env.example .env
npm run dev
```

The API listens on `http://localhost:5000`. The frontend is already configured to use `http://localhost:5000/api` by default.

Registration requires a password of at least 8 characters and stores only a bcrypt hash. The development server creates these demo accounts if they do not already exist:

| Account | Email | Password | Role |
| --- | --- | --- | --- |
| Admin | `admin@paryatan360.com` | `Admin@12345` | Government |
| User | `user@paryatan360.com` | `User@12345` | Tourist |

Change these values with `DEMO_*` environment variables before deploying. The Government role is the current admin-style role in this application.

## Project structure

```text
Backend/
	server.js                 # Process entry point
	src/
		app.js                  # Express application composition
		config/env.js            # Environment configuration
		data/tourismData.js      # Seed recommendations and insight data
		models/User.js           # User model and in-memory repository
		models/Trip.js           # Trip model and in-memory repository
		services/authService.js  # Registration, login and JWT sessions
		services/tourismService.js
		controllers/             # HTTP request handlers
		routes/                  # API route declarations
		middleware/auth.js       # JWT authentication and role access
		middleware/validate.js   # Request validation
		middleware/errorHandler.js
```

## Environment

Copy `.env.example` to `.env` and set a strong `JWT_SECRET` outside local development:

```env
PORT=5000
JWT_SECRET=replace-this-in-development
FRONTEND_ORIGIN=http://localhost:5173
```

## Routes

- `GET /api/health`
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/trips/plan`
- `GET /api/trips/current`
- `POST /api/trips/current/stops`
- `DELETE /api/trips/current/stops/:stopId`
- `GET /api/destinations/recommendations?destination=Jaipur`
- `GET /api/government/insights`
- `GET /api/hotel/insights`
- `GET /api/business/insights`

Tourism and insight routes require a bearer token. Tourist trip routes additionally require the `Tourist` role; each role insight route requires its matching role.
