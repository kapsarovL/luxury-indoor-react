# Database Migrations

This directory contains database schema migrations for the Luxury Indoor React backend.

## Overview

The migration system uses sequential numbered SQL files to manage database schema changes. Each migration is applied only once and tracked in the `migrations` table.

## Structure

- **Migrations**: Numbered `.sql` files (e.g., `001_initial_schema.sql`)
- **Rollbacks**: Rollback scripts (e.g., `001_initial_schema.rollback.sql`)
- **Runner**: `migrate.js` script in the server root directory

## Running Migrations

### Apply all pending migrations

```bash
npm run migrate
```

This will:

1. Create the `migrations` table if it doesn't exist
2. Check which migrations have been applied
3. Execute all pending migrations in order
4. Track each migration in the database

### Rollback a specific migration

```bash
npm run migrate:rollback 001_initial_schema.sql
```

This will:

1. Execute the corresponding `.rollback.sql` file
2. Remove the migration record from the database

## Creating New Migrations

### 1. Create a migration file

Create a new file with the naming convention: `NNN_description.sql`

Example: `002_add_user_roles.sql`

```sql
-- Add roles column to users table
ALTER TABLE users ADD COLUMN role VARCHAR(50) DEFAULT 'user';

-- Create index on role for faster queries
CREATE INDEX idx_users_role ON users(role);
```

### 2. Create a rollback file

Create a corresponding `.rollback.sql` file with the reverse operations:

```sql
-- Drop the index
DROP INDEX IF EXISTS idx_users_role;

-- Remove the role column
ALTER TABLE users DROP COLUMN role;
```

### 3. Run migrations

```bash
npm run migrate
```

## Best Practices

1. **Keep migrations atomic**: Each migration should represent a single logical change
2. **Always provide rollbacks**: Write rollback scripts for all migrations
3. **Test before committing**: Test migrations locally before pushing
4. **Use transactions**: The migration runner wraps each migration in a transaction
5. **Be careful with data**: Make backups before running migrations on production
6. **Name clearly**: Use descriptive names that indicate what the migration does

## Safety Features

- **Transactions**: Each migration is wrapped in a transaction. If it fails, all changes are rolled back
- **Tracking**: Applied migrations are recorded in the database to prevent duplicate execution
- **Sequencing**: Migrations are applied in filename order to ensure consistency
- **Rollbacks**: Each migration can be rolled back if needed

## Migration Examples

### Adding a column

```sql
-- 002_add_phone_to_users.sql
ALTER TABLE users ADD COLUMN phone VARCHAR(20);
```

```sql
-- 002_add_phone_to_users.rollback.sql
ALTER TABLE users DROP COLUMN phone;
```

### Creating a new table

```sql
-- 003_create_reviews_table.sql
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  property_id INTEGER NOT NULL REFERENCES properties(id),
  user_id INTEGER NOT NULL REFERENCES users(id),
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_reviews_property ON reviews(property_id);
```

```sql
-- 003_create_reviews_table.rollback.sql
DROP TABLE IF EXISTS reviews;
```

### Data migration

```sql
-- 004_normalize_prices.sql
BEGIN;
-- Convert price strings to numeric values if needed
UPDATE properties
SET price = CAST(REPLACE(price, '$', '') AS NUMERIC)
WHERE price LIKE '$%';
COMMIT;
```

```sql
-- 004_normalize_prices.rollback.sql
-- Note: Data migrations may not be reversible
-- This is a warning that rolling back data changes requires a backup
```

## Troubleshooting

### Migration failed

If a migration fails:

1. Check the error message in the console
2. Fix the SQL in the migration file
3. The migration will not be marked as applied due to rollback
4. Run `npm run migrate` again after fixing

### Too many pending migrations

If many migrations are pending, they'll be applied in order. This is normal for fresh databases.

### Lost migration files

If a migration file is deleted but the record exists in the database:

1. You cannot re-run that migration (it's marked as applied)
2. Manually delete the record: `DELETE FROM migrations WHERE name = '001_initial_schema.sql'`
3. Only do this if you're sure the migration was applied successfully
