
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/ping', (_req, res) => res.json({ message: 'Pong!' }));

app.listen(5000, () => console.log('Server running on port 5000'));
    