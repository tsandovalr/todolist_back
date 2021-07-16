import { Request, Response } from 'express';

import Task from '../models/Task';

// req se declara de tipo any debido a que al asignarle el tipo Request da error de tipado

export const getTasksByUser = async (req: any, res: Response) => {
    const { _id } = req.user;
    try {
        const tasks = await Task.find({ author: _id });
        return res.status(200).json({ status: 200, tasks });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    };
};

export const getTaskById = async (req: any, res: Response) => {
    const { id } = req.params;
    try {
        const task = await Task.findById(id);
        return res.status(200).json({ status: 200, task });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    };
};

export const createTask = async (req: any, res: Response) => {
    const { title, description, priority, date, time, pinned } = req.body;
    const { _id } = req.user;
    try {
        const newTask = new Task({
            title,
            description,
            priority,
            date,
            time,
            pinned,
            author: _id
        });
        await newTask.save();
        return res.status(200).json({ status: 200, message: 'Task successfully created', task: newTask });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    };
};

export const updateTask = async (req: any, res: Response) => {
    const { title, description, priority, date, time, pinned } = req.body;
    const { _id } = req.user;
    const { id } = req.params;
    try {
        const task = await Task.findByIdAndUpdate(id, {
            title,
            description,
            priority,
            date,
            time,
            pinned,
            author: _id
        }, { new: true });
        return res.status(200).json({ status: 200, message: 'Task successfully updated', task });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    };
};

export const deleteTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await Task.findByIdAndDelete(id);
        return res.status(200).json({ status: 200, message: 'Task successfully deleted' });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    };
};