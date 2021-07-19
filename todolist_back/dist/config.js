"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    JWT_SECRET: process.env.JWT_SECRET || "somesecrettoken",
    jwtSecret: process.env.JWT_SECRET || "somesecrettoken",
    secretOrKey: process.env.JWT_SECRET || "somesecrettoken",
};
