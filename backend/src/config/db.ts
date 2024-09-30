import { Pool } from 'pg';
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
