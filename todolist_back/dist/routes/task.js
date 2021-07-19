"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const passport_1 = __importDefault(require("passport"));
const task_controller_1 = require("../controllers/task.controller");
router.route('/task')
    .get(passport_1.default.authenticate('jwt', { session: false }), task_controller_1.getTasksByUser)
    .post(passport_1.default.authenticate('jwt', { session: false }), task_controller_1.createTask);
router.route('/task/:id')
    .get(passport_1.default.authenticate('jwt', { session: false }), task_controller_1.getTaskById)
    .put(passport_1.default.authenticate('jwt', { session: false }), task_controller_1.updateTask)
    .delete(passport_1.default.authenticate('jwt', { session: false }), task_controller_1.deleteTask);
exports.default = router;
