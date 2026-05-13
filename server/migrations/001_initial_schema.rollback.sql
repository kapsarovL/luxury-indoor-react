-- Drop indexes
DROP INDEX IF EXISTS idx_subscriptions_email;
DROP INDEX IF EXISTS idx_properties_type;
DROP INDEX IF EXISTS idx_properties_location;
DROP INDEX IF EXISTS idx_users_username;
DROP INDEX IF EXISTS idx_users_email;

-- Drop tables
DROP TABLE IF EXISTS subscriptions;
DROP TABLE IF EXISTS properties;
DROP TABLE IF EXISTS users;
