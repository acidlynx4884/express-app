import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './routes/index.js';
import { notFound } from './middlewares/notFound.js';
import { errorHandler } from './middlewares/errorHandler.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.use(router);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
