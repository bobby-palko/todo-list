"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = require("body-parser");
var cors_1 = __importDefault(require("cors"));
// database connection information
var index_1 = __importDefault(require("./db/index"));
// where we've defined all the endpoints
var item_router_1 = __importDefault(require("./routes/item-router"));
var app = (0, express_1.default)();
var apiPort = 3000;
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.use((0, cors_1.default)());
app.use((0, body_parser_1.json)());
index_1.default.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.get('/', function (req, res) {
    res.send('Hello World!');
});
// root route for api endpoints
app.use('/api', item_router_1.default);
app.listen(apiPort, function () { return console.log("Server running on port ".concat(apiPort)); });
