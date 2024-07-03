// express server
import express from 'express';
import dotenv from 'dotenv';
// eslint-disable-next-line import/extensions
import routes from '../routes/index.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use('/', routes);

app.listen(port, () => console.log(`Server running on port ${port}`));
