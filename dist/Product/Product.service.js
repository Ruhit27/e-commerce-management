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
exports.ProductService = void 0;
const Product_model_1 = require("./Product.model");
const createProductInDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Product_model_1.ProductModel.create(product);
    return result;
});
const getAllProductInDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Product_model_1.ProductModel.find();
    return result;
});
const getbySearchInDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Product_model_1.ProductModel.find({ name: searchTerm });
    return result;
});
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = Product_model_1.ProductModel.findById(id);
    return result;
});
const deleteProductFromDB = (id) => {
    const result = Product_model_1.ProductModel.deleteOne({ _id: id });
    return result;
};
exports.ProductService = {
    createProductInDB,
    getAllProductInDB,
    getProductById,
    deleteProductFromDB,
    getbySearchInDB
};
