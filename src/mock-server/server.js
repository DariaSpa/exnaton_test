import express from 'express';
import cors from 'cors';
import data from './data.json' assert { type: 'json' };

const app = express();
const port = 8000;

app.use(cors())

app.get('/reports', (req, res) => {
  const dateParam = req.query.date;

  if (!dateParam) {
    return res.status(400).json({ error: 'Date parameter is required' });
  }

  const filteredData = data.filter(item =>
    item.ts.startsWith(dateParam)
  );

  res.json(filteredData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
