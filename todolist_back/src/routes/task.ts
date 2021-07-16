import { Router } from 'express';
const router = Router();

import passport from 'passport';

import { createTask, deleteTask, getTasksByUser, getTaskById, updateTask } from '../controllers/task.controller';

router.route('/task')
    .get(passport.authenticate('jwt', { session: false }), getTasksByUser)
    .post(passport.authenticate('jwt', { session: false }), createTask)

router.route('/task/:id')
    .get(passport.authenticate('jwt', { session: false }), getTaskById)
    .put(passport.authenticate('jwt', { session: false }), updateTask)
    .delete(passport.authenticate('jwt', { session: false }), deleteTask)

export default router;