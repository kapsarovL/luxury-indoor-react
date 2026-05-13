import fs from 'fs';
import path from 'path';
import { Pool } from '@neondatabase/serverless';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const migrationsDir = path.join(process.cwd(), 'migrations');

async function createMigrationsTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS migrations (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL UNIQUE,
      applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

async function getAppliedMigrations() {
  const result = await pool.query('SELECT name FROM migrations ORDER BY name');
  return result.rows.map((row) => row.name);
}

async function getMigrationFiles() {
  const files = fs.readdirSync(migrationsDir);
  return files
    .filter((file) => file.endsWith('.sql') && !file.endsWith('.rollback.sql'))
    .sort();
}

async function runMigration(filename) {
  const filepath = path.join(migrationsDir, filename);
  const sql = fs.readFileSync(filepath, 'utf8');

  try {
    await pool.query('BEGIN');
    await pool.query(sql);
    await pool.query('INSERT INTO migrations (name) VALUES ($1)', [filename]);
    await pool.query('COMMIT');
    console.log(`✓ Applied migration: ${filename}`);
    return true;
  } catch (error) {
    await pool.query('ROLLBACK');
    console.error(`✗ Failed to apply migration ${filename}:`, error.message);
    return false;
  }
}

async function rollbackMigration(filename) {
  const rollbackFilepath = path.join(
    migrationsDir,
    filename.replace('.sql', '.rollback.sql')
  );

  if (!fs.existsSync(rollbackFilepath)) {
    console.error(`No rollback file found for ${filename}`);
    return false;
  }

  const sql = fs.readFileSync(rollbackFilepath, 'utf8');

  try {
    await pool.query('BEGIN');
    await pool.query(sql);
    await pool.query('DELETE FROM migrations WHERE name = $1', [filename]);
    await pool.query('COMMIT');
    console.log(`✓ Rolled back migration: ${filename}`);
    return true;
  } catch (error) {
    await pool.query('ROLLBACK');
    console.error(`✗ Failed to rollback migration ${filename}:`, error.message);
    return false;
  }
}

async function migrate() {
  try {
    console.log('Starting database migrations...\n');

    await createMigrationsTable();
    const appliedMigrations = await getAppliedMigrations();
    const migrationFiles = await getMigrationFiles();

    const pendingMigrations = migrationFiles.filter(
      (file) => !appliedMigrations.includes(file)
    );

    if (pendingMigrations.length === 0) {
      console.log('No pending migrations.');
      return;
    }

    console.log(`Found ${pendingMigrations.length} pending migration(s)\n`);

    let failedCount = 0;
    for (const filename of pendingMigrations) {
      const success = await runMigration(filename);
      if (!success) failedCount++;
    }

    if (failedCount === 0) {
      console.log(
        `\n✓ All migrations completed successfully (${pendingMigrations.length} applied)`
      );
    } else {
      console.log(
        `\n✗ ${failedCount} migration(s) failed, ${pendingMigrations.length - failedCount} applied`
      );
      process.exit(1);
    }
  } catch (error) {
    console.error('Migration error:', error.message);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

const args = process.argv.slice(2);
if (args[0] === 'rollback') {
  if (!args[1]) {
    console.error('Usage: node migrate.js rollback <filename>');
    process.exit(1);
  }
  (async () => {
    try {
      await createMigrationsTable();
      await rollbackMigration(args[1]);
    } catch (error) {
      console.error('Rollback error:', error.message);
      process.exit(1);
    } finally {
      await pool.end();
    }
  })();
} else {
  migrate();
}
