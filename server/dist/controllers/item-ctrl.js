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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemById = exports.getAllItems = exports.deleteItem = exports.updateItem = exports.createItem = void 0;
var todo_model_1 = require("../models/todo-model");
var createItem = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, item;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = req.body;
                if (!body) {
                    return [2 /*return*/, res.status(400).json({
                            success: false,
                            error: 'You must provide an item',
                        })];
                }
                item = new todo_model_1.Item(body);
                item.active = true;
                if (!item) {
                    return [2 /*return*/, res.status(400).json({
                            success: false,
                            error: 'error creating new item',
                        })];
                }
                return [4 /*yield*/, item
                        .save()
                        .then(function () {
                        return res.status(201).json({
                            success: true,
                            id: item._id,
                            message: 'Item added!',
                        });
                    })
                        .catch(function (error) {
                        return res.status(400).json({
                            error: error,
                            message: 'new item unable to be added',
                        });
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.createItem = createItem;
var updateItem = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = req.body;
                if (!body) {
                    return [2 /*return*/, res.status(400).json({
                            success: false,
                            error: 'You must provide something to update',
                        })];
                }
                return [4 /*yield*/, todo_model_1.Item.findOne({ _id: req.params.id }, function (err, item) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (err) {
                                        return [2 /*return*/, res.status(404).json({
                                                err: err,
                                                message: 'Item not found.',
                                            })];
                                    }
                                    console.log(body);
                                    item.title = body.title;
                                    item.description = body.description;
                                    return [4 /*yield*/, item
                                            .save()
                                            .then(function () {
                                            return res.status(200).json({
                                                success: true,
                                                id: item._id,
                                                message: 'Item updated!',
                                            });
                                        })
                                            .catch(function (error) {
                                            return res.status(404).json({
                                                error: error,
                                                message: 'item unable to be updated',
                                            });
                                        })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.updateItem = updateItem;
var deleteItem = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = req.body;
                if (!body) {
                    return [2 /*return*/, res.status(400).json({
                            success: false,
                            error: 'You must provide something to delete!',
                        })];
                }
                // we're not actually deleting from the DB, just deactivating it
                return [4 /*yield*/, todo_model_1.Item.findOne({ _id: req.params.id }, function (err, item) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (err) {
                                        return [2 /*return*/, res.status(400).json({
                                                success: false,
                                                error: err,
                                            })];
                                    }
                                    if (!item) {
                                        console.log('Whoops');
                                        return [2 /*return*/, res.status(404).json({
                                                success: false,
                                                error: 'Item not found',
                                            })];
                                    }
                                    item.active = false;
                                    return [4 /*yield*/, item
                                            .save()
                                            .then(function () {
                                            return res.status(200).json({
                                                success: true,
                                                id: item._id,
                                                message: 'Item deleted!',
                                            });
                                        })
                                            .catch(function (error) {
                                            return res.status(404).json({
                                                error: error,
                                                message: 'item unable to be deactivated',
                                            });
                                        })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            case 1:
                // we're not actually deleting from the DB, just deactivating it
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.deleteItem = deleteItem;
/**
 * We won't be getting a single item at any point, but still good practice
 */
var getItemById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = req.body;
                if (!body) {
                    return [2 /*return*/, res.status(400).json({
                            success: false,
                            error: 'No search parameters!',
                        })];
                }
                return [4 /*yield*/, todo_model_1.Item.findOne({ _id: req.params.id }, function (err, item) {
                        if (err) {
                            return res.status(400).json({
                                success: false,
                                error: err,
                            });
                        }
                        if (!item) {
                            return res.status(404).json({
                                success: false,
                                error: 'Item not found',
                            });
                        }
                        return res.status(200).json({
                            success: true,
                            data: item,
                        });
                    }).catch(function (err) { return console.log(err); })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.getItemById = getItemById;
var getAllItems = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = req.body;
                if (!body) {
                    return [2 /*return*/, res.status(400).json({
                            success: false,
                            error: 'No search parameters!',
                        })];
                }
                return [4 /*yield*/, todo_model_1.Item.find({ active: true }, function (err, items) {
                        if (err) {
                            return res.status(400).json({
                                success: false,
                                error: err,
                            });
                        }
                        if (!items.length) {
                            return res.status(404).json({
                                success: false,
                                error: 'Items not found!',
                            });
                        }
                        return res.status(200).json({
                            success: true,
                            data: items,
                        });
                    }).catch(function (err) { return console.log(err); })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.getAllItems = getAllItems;
