"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTaskById = exports.getTasksByUser = void 0;
const Task_1 = __importDefault(require("../models/Task"));
// req se declara de tipo any debido a que al asignarle el tipo Request da error de tipado
const getTasksByUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.user;
    try {
        const tasks = yield Task_1.default.find({ author: _id });
        return res.status(200).json({ status: 200, tasks });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    }
    ;
});
exports.getTasksByUser = getTasksByUser;
const getTaskById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const task = yield Task_1.default.findById(id);
        return res.status(200).json({ status: 200, task });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    }
    ;
});
exports.getTaskById = getTaskById;
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, priority, date, time, pinned } = req.body;
    const { _id } = req.user;
    try {
        const newTask = new Task_1.default({
            title,
            description,
            priority,
            date,
            time,
            pinned,
            author: _id
        });
        yield newTask.save();
        return res.status(200).json({ status: 200, message: 'Task successfully created', task: newTask });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    }
    ;
});
exports.createTask = createTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, priority, date, time, pinned } = req.body;
    const { _id } = req.user;
    const { id } = req.params;
    try {
        const task = yield Task_1.default.findByIdAndUpdate(id, {
            title,
            description,
            priority,
            date,
            time,
            pinned,
            author: _id
        }, { new: true });
        return res.status(200).json({ status: 200, message: 'Task successfully updated', task });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    }
    ;
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield Task_1.default.findByIdAndDelete(id);
        return res.status(200).json({ status: 200, message: 'Task successfully deleted' });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    }
    ;
});
exports.deleteTask = deleteTask;
