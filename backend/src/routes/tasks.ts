
import express from 'express';
import prisma from '../prisma';

const router = express.Router();

router.get('/', async (_req, res) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});

router.post('/', async (req, res) => {
  const task = await prisma.task.create({ data: req.body });
  res.json(task);
});

router.patch('/:id', async (req, res) => {
  const task = await prisma.task.update({
    where: { id: Number(req.params.id) },
    data: req.body
  });
  res.json(task);
});

router.delete('/:id', async (req, res) => {
  await prisma.task.delete({ where: { id: Number(req.params.id) } });
  res.json({ deleted: true });
});

export default router;
    