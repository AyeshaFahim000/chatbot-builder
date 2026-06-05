import express from 'express';
import userRoutes from './routes/userRoutes.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();

await connectDB();

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));