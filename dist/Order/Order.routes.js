"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRouter = void 0;
const express_1 = __importDefault(require("express"));
const Order_controller_1 = require("./Order.controller");
const router = express_1.default.Router();
router.post("/order", Order_controller_1.OrderController.createOrder);
router.get("/orders", Order_controller_1.OrderController.getOrder);
exports.OrderRouter = router;
