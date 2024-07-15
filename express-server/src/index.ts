import express from 'express';
import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3000);

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
});

app.get('/', async (req, res) => {
  await client.connect();
  res.json({ hello: 5 });
});
 
const port = Number(process.env.PORT);
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}`);
});