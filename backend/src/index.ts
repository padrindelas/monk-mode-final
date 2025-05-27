
import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/tasks';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
    