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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const Product_model_1 = require("../Product/Product.model");
const Order_model_1 = require("./Order.model");
const orderCreateDB = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Order_model_1.OrderModel.create(order);
    return result;
});
const productValidation = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const productFound = yield Product_model_1.ProductModel.findOne({ _id: productId });
    return productFound;
});
const InventoryCheck = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const productFound = yield Product_model_1.ProductModel.findOne({ _id: productId });
    const orderFound = yield Order_model_1.OrderModel.findOne({ productId: productId });
    let inventory = productFound.inventory.quantity;
    let inStock = productFound.inventory.inStock;
    if (inStock) {
        inventory = inventory - 1;
        console.log("this is result", productFound.inventory.quantity);
        const updatedProduct = yield productFound.save();
        return updatedProduct;
    }
    else {
        console.log('Product is not in stock');
        return false;
    }
});
const getOrderFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Order_model_1.OrderModel.find();
    return result;
});
const getOrderInfoByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Order_model_1.OrderModel.find({ email: email });
    return result;
});
exports.OrderService = {
    orderCreateDB,
    getOrderFromDB,
    productValidation,
    getOrderInfoByEmail,
    InventoryCheck
};
