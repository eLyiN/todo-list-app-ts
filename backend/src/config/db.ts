import { Pool } from 'pg';

// Establish a new connection to the database
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'nexplore_db',
  password: 'yourpassword', 
  port: 5432,
});

export default pool;
