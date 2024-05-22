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
exports.OrderController = void 0;
const Order_service_1 = require("./Order.service");
const Order_validation_schema_1 = __importDefault(require("./Order.validation.schema"));
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body.order;
        const { value, error } = Order_validation_schema_1.default.validate(data);
        if (error) {
            res.status(400).json({
                success: false,
                message: error.message,
                data: error
            });
        }
        else {
            const result = yield Order_service_1.OrderService.orderCreateDB(value);
            res.status(200).json({
                success: true,
                message: "Order created successfully",
                data: result
            });
        }
    }
    catch (error) {
        console.log(error);
    }
});
const getOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Order_service_1.OrderService.getOrderFromDB();
        res.status(200).json({
            success: true,
            message: "Order fetched successfully",
            data: result
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.OrderController = {
    createOrder,
    getOrder,
};
