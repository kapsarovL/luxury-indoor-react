# Neon Database Setup

## Overview

The Luxury Indoor React application has been migrated from Dexie (client-side IndexedDB) to Neon PostgreSQL database. This document explains the setup and how to run the project.

## Database Setup

### Neon Project Details

- **Project ID**: `curly-pine-39984575`
- **Branch**: `main` (ID: `br-late-heart-akavch59`)
- **Database**: `neondb`
- **Region**: us-west-2

### Database Schema

Three main tables have been created:

#### `users` table

- `id` (SERIAL, PRIMARY KEY)
- `email` (VARCHAR(255), UNIQUE)
- `username` (VARCHAR(30), UNIQUE)
- `password` (VARCHAR(255), hashed with bcryptjs)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

#### `properties` table

- `id` (UUID, PRIMARY KEY)
- `title` (VARCHAR(255))
- `location` (VARCHAR(255))
- `price` (VARCHAR(50))
- `bedrooms` (INTEGER)
- `bathrooms` (INTEGER)
- `area` (VARCHAR(50))
- `description` (TEXT)
- `images` (JSONB array)
- `amenities` (JSONB array)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

#### `subscriptions` table

- `id` (SERIAL, PRIMARY KEY)
- `email` (VARCHAR(255), UNIQUE)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

## Environment Variables

Create a `.env` file in the project root with:

```
VITE_API_URL=http://localhost:3001/api
DATABASE_URL=postgresql://[user]:[password]@[host]/[database]?sslmode=require
```

Get the `DATABASE_URL` from your Neon project dashboard.

## Running the Project

### Terminal 1: Start the Backend Server

```bash
npm run dev:server
# or with auto-reload:
npm run dev:server:watch
```

The server will start on `http://localhost:3001`

### Terminal 2: Start the Frontend Development Server

```bash
npm run dev
```

The frontend will start on `http://localhost:5173`

## API Endpoints

### Properties

- `GET /api/properties` - Get all properties
- `GET /api/properties/:id` - Get property by ID
- `POST /api/properties` - Create property
- `PUT /api/properties/:id` - Update property
- `DELETE /api/properties/:id` - Delete property

### Users

- `POST /api/users` - Create user
- `GET /api/users/email/:email` - Get user by email
- `GET /api/users/username/:username` - Get user by username
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Subscriptions

- `POST /api/subscriptions` - Create subscription
- `GET /api/subscriptions` - Get all subscriptions
- `GET /api/subscriptions/email/:email` - Get subscription by email
- `PUT /api/subscriptions/:id` - Update subscription
- `DELETE /api/subscriptions/:id` - Delete subscription
- `DELETE /api/subscriptions/email/:email` - Unsubscribe by email

## Architecture

```
luxury-indoor-react (Frontend)
├── src/
│   ├── components/
│   ├── context/ (AuthContext, PropertyContext, etc.)
│   ├── hooks/
│   ├── services/
│   │   └── neonService.js (API client)
│   ├── db/
│   │   └── database.js (wrapper around neonService)
│   └── ...
└── server/ (Backend)
    ├── index.js (Express server)
    └── package.json
```

### Data Flow

1. React components use hooks (useAuth, useProperty, etc.)
2. Hooks call database.js functions
3. database.js calls neonService methods
4. neonService makes HTTP requests to Express backend
5. Express server executes SQL queries on Neon database
6. Response flows back through the chain to React components

## Database Initialization

Properties from `src/data/propertyData.js` are automatically seeded into the database on first app launch via the `initializeDatabase()` function.

## Removed Dependencies

The following dependencies have been replaced by Neon integration:

- `dexie` - Removed, use Neon PostgreSQL instead
- `dexie-cloud` - Removed, use Neon instead

## Next Steps

1. Test the full authentication flow (signup → login → logout)
2. Verify property listings load from the database
3. Test subscription functionality
4. Deploy to production (Netlify for frontend, database remains on Neon)

## Troubleshooting

### "Failed to fetch" errors

- Ensure backend server is running (`npm run dev:server`)
- Check that `VITE_API_URL` is correct in `.env`
- Verify database connection string in `DATABASE_URL`

### Database connection errors

- Verify Neon project is active
- Check that connection string includes `?sslmode=require`
- Ensure password is correct (copy directly from Neon console)

### CORS errors

- Backend server has CORS enabled
- Check browser console for actual error message
