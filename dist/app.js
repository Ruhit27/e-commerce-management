"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Product_route_1 = require("./Product/Product.route");
const Order_routes_1 = require("./Order/Order.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api', Product_route_1.ProductRouter);
app.use('/api', Order_routes_1.OrderRouter);
app.get("/", (req, res) => {
    res.send("Hello World!,Nothibg yes");
});
exports.default = app;
