import Fastify from 'fastify';
import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

const fastify = Fastify({ logger: true });

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432,
});

fastify.get('/', async () => {
  const result = await pool.query('SELECT NOW()');
  return result.rows;
});

fastify.get('/users', async () => {
  const result = await pool.query('SELECT * FROM users');
  return result.rows;
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    console.log('Server running on port 3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();