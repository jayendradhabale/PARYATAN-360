# PARYATAN 360

PARYATAN 360 is a role-based tourism intelligence platform that connects travellers, hotels, local businesses, and government teams through one shared tourism ecosystem.

The application provides trip planning and recovery tools for tourists, demand and occupancy insights for hotels, promotional and revenue tools for businesses, and visitor-flow and crowd-management insights for government teams.

## Highlights

- Personalised trip planning with day-by-day itinerary management
- Destination recommendations and trip recovery support
- Hotel occupancy tracking, demand forecasting, and package recommendations
- Business profiles, visitor offers, and revenue opportunities
- Government dashboards for tourist flows, crowd monitoring, revenue analytics, and demand prediction
- JWT-based authentication with role-specific access
- Express API with optional MongoDB persistence and an in-memory development fallback

## Technology

- **Frontend:** React, React Router, Vite, and Tailwind CSS
- **Backend:** Node.js, Express, and Mongoose
- **Authentication:** JSON Web Tokens and bcryptjs
- **Data:** MongoDB when configured; in-memory storage otherwise

## Project Structure

```text
PARYATAN-360/
├── Backend/
│   ├── server.js              # Backend process entry point
│   └── src/
│       ├── controllers/        # Request handlers
│       ├── data/               # Seed tourism and insight data
│       ├── models/             # User and trip models
│       ├── routes/             # API route declarations
│       ├── services/           # Authentication and tourism logic
│       └── middleware/         # Auth, validation, and error handling
├── Frontend/
│   ├── src/pages/              # Landing, auth, and role dashboards
│   ├── src/components/         # Shared and role-specific UI
│   └── src/api/                # API client and service modules
└── package.json                # Root frontend convenience scripts
```

## Prerequisites

- Node.js 18 or newer
- npm
- MongoDB, only if persistent storage is required

## Installation

Install dependencies in both applications:

```powershell
cd Backend
npm install

cd ..\Frontend
npm install
```

## Configuration

Create `Backend/.env` from `Backend/.env.example`:

```env
PORT=5000
MONGODB_URI=
JWT_SECRET=replace-this-in-development
FRONTEND_ORIGIN=http://localhost:5173
```

Leave `MONGODB_URI` empty to use the in-memory development store. Data stored in memory is reset when the backend restarts.

Create `Frontend/.env` from `Frontend/.env.example` only when the API is hosted somewhere other than the default:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Never commit real database credentials or production secrets to `.env` files.

## Run Locally

Start the backend in one terminal:

```powershell
cd Backend
npm run dev
```

Start the frontend in a second terminal:

```powershell
cd Frontend
npm run dev
```

Open `http://localhost:5173` in a browser. The backend listens on `http://localhost:5000`.

The root project also provides frontend convenience scripts:

```powershell
npm run dev       # Start the frontend
npm run build     # Create a production frontend build
npm run preview   # Preview the production build
```

## Demo Accounts

The backend creates these development accounts when they do not already exist:

| Role | Email | Password |
| --- | --- | --- |
| Government | `admin@paryatan360.com` | `Admin@12345` |
| Tourist | `user@paryatan360.com` | `User@12345` |

Override the demo values with `DEMO_ADMIN_EMAIL`, `DEMO_ADMIN_PASSWORD`, `DEMO_USER_EMAIL`, and `DEMO_USER_PASSWORD` in `Backend/.env` before deploying.

## API Overview

The API is served from `/api`:

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

Tourism, trip, and insight routes require a bearer token. Role-specific routes also require the matching account role.

## Production Notes

- Set a strong, unique `JWT_SECRET`.
- Configure `MONGODB_URI` for persistent data storage.
- Set `FRONTEND_ORIGIN` to the deployed frontend origin.
- Replace the development demo credentials before deployment.
