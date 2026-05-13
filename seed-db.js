import { Pool } from '@neondatabase/serverless';
import { properties } from './src/data/propertyData.js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: `${__dirname}/server/.env` });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const seedDatabase = async () => {
  try {
    console.log('🌱 Seeding database with property data...');

    for (const property of properties) {
      const dbProperty = {
        ...property,
        images: property.imgURL
          ? [property.imgURL, ...(property.images || [])]
          : property.images || [],
      };

      await pool.query(
        `INSERT INTO properties
         (title, location, price, bedrooms, bathrooms, area, description, images, amenities, type)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
        [
          dbProperty.title,
          dbProperty.location,
          dbProperty.price,
          dbProperty.bedrooms,
          dbProperty.bathrooms,
          dbProperty.area,
          dbProperty.description,
          JSON.stringify(dbProperty.images),
          JSON.stringify(dbProperty.amenities),
          dbProperty.type,
        ]
      );
    }

    const result = await pool.query('SELECT COUNT(*) as count FROM properties');
    console.log(`✅ Database seeded with ${result.rows[0].count} properties`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  }
};

seedDatabase();
