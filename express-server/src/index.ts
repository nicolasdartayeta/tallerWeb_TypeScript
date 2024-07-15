import express from 'express';
import dotenv from 'dotenv';
 
dotenv.config();
const app = express();
 
app.get('/', async (req, res) => {
  res.json({ hello: "hola" });
});
 
const port = Number(process.env.PORT);
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}`);
});