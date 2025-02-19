import express from 'express';
import cors from 'cors';
import authRoutes from './routes/AuthRoutes.js';
import userRoutes from './routes/UserRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});