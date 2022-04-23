"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
var mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
var databaseUrl = process.env.DATABASE_URL || '';
mongoose_1.default
    .connect(databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .catch(function (e) {
    console.error('Connection error', e.message);
});
var db = mongoose_1.default.connection;
exports.default = db;
