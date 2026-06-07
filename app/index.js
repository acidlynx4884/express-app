import express from 'express';
import router from './routes/index.js';
import { notFound } from './middlewares/notFound.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { connectDB } from './db.js';

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());

app.use(router);

app.use(notFound);
app.use(errorHandler);

await connectDB();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
