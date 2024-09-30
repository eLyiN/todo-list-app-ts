import { Pool } from 'pg';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();  // Load environment variables

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: Number(process.env.POSTGRES_PORT),
  ssl: {
    rejectUnauthorized: false
  }
});

export default pool;


//********* FOR TEST PURPOSES *********//
// const testConnection = async () => {
//   try {
//     await pool.connect();
//     console.log('Database connection successful');
//   } catch (err) {
//     console.error('Database connection error', err);
//   } finally {
//     await pool.end();
//   }
// };

// testConnection();


const checkTablesExist = async () => {
  const query = `
    SELECT EXISTS (
      SELECT FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name = 'todos'
    );
  `;
  const result = await pool.query(query);
  return result.rows[0].exists;
};

const createTables = async () => {
  const schemaPath = path.join(__dirname, 'schema.sql');
  const schemaSql = fs.readFileSync(schemaPath, 'utf-8');

  try {
    await pool.query(schemaSql);
    console.log('Database schema created successfully');
  } catch (err) {
    console.error('Error creating database schema', err);
  } finally {
    await pool.end();
  }
};

const initializeDatabase = async () => {
  const tablesExist = await checkTablesExist();
  if (!tablesExist) {
    await createTables();
  } else {
    console.log('Tables already exist. Skipping schema creation.');
  }
};

if (process.env.NODE_ENV === 'development') {
  initializeDatabase();
}