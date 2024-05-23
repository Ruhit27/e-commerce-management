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
        const afterChecking = yield Order_service_1.OrderService.productValidation(value.productId);
        if (afterChecking) {
            const result = yield Order_service_1.OrderService.orderCreateDB(value);
            res.status(200).json({
                success: true,
                message: "Order created successfully",
                data: result,
            });
        }
        else {
            res.status(400).json({
                success: false,
                messege: "Product not found",
                data: error,
            });
        }
    }
    catch (error) {
        console.log(error);
    }
});
// get all orders or get orders by email
const getOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.query.email;
    const getOrderByEmail = yield Order_service_1.OrderService.getOrderInfoByEmail(email);
    const getAllOrders = yield Order_service_1.OrderService.getOrderFromDB();
    if (email) {
        console.log("this is getOrderByEmail", getOrderByEmail);
        try {
            res.status(400).json({
                success: true,
                message: "Order by email fetched successfully",
                data: getOrderByEmail,
            });
        }
        catch (error) {
            console.log(error);
        }
        // ....
    }
    else {
        try {
            res.status(400).json({
                success: true,
                message: "Order fetched successfully",
                data: getAllOrders,
            });
        }
        catch (error) {
            console.log(error);
        }
    }
});
exports.OrderController = {
    createOrder,
    getOrder,
};
