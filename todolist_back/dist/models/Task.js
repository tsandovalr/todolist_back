"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const { ObjectId } = mongoose_1.Schema.Types;
const taskSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priority: {
        type: String
    },
    date: {
        type: Date
    },
    time: {
        type: String
    },
    pinned: {
        type: Boolean,
        default: false
    },
    author: {
        type: ObjectId,
        ref: 'User'
    }
});
exports.default = mongoose_1.model('Task', taskSchema);
