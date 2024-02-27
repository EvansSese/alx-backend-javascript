import express from 'express';
import routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 1245;
const DATABASE_PATH = process.argv[2];

app.use((req, res, next) => {
  req.databasePath = DATABASE_PATH;
  next();
});

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
