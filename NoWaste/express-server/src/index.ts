import express from 'express';

const app = express();
 
app.get('/', async (req, res) => {
  res.json({ hello: "world" });
});
 
const port = Number(process.env.PORT);
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}`);
});