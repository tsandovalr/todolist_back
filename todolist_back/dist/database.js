"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI;
mongoose_1.default.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
});
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log('MongoDB connection succesfull');
});
connection.on('error', err => {
    console.log(err);
    process.exit(0);
});
