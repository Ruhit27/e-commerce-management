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
exports.ProductController = void 0;
const Product_service_1 = require("./Product.service");
const Product_validation_schema_1 = __importDefault(require("./Product.validation.schema"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body.product;
        const { value, error } = Product_validation_schema_1.default.validate(data);
        if (error) {
            return res.status(400).json({
                success: false,
                message: error.message,
                data: error,
            });
        }
        else {
            const result = yield Product_service_1.ProductService.createProductInDB(value);
            res.status(200).json({
                sucess: true,
                message: "Product created successfully",
                data: result,
            });
        }
    }
    catch (error) {
        res.status(500).json({
            messege: error
        });
    }
});
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const search = req.query;
        // console.log("inside and getProduct search",search);
        const { searchTerm } = search;
        // console.log("inside and getProduct searchTerm",searchTerm);
        if (searchTerm) {
            const result = yield Product_service_1.ProductService.getbySearchInDB(search.searchTerm);
            res.status(200).json({
                sucess: true,
                message: "Product fetched successfully",
                data: result,
            });
        }
        else {
            const result = yield Product_service_1.ProductService.getAllProductInDB();
            res.status(200).json({
                sucess: true,
                message: "Product fetched successfully",
                data: result,
            });
        }
    }
    catch (error) {
        console.log(error);
    }
});
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("inside getSingleProduct");
    try {
        const { productsId } = req.params;
        // console.log("something", productsId);
        const result = yield Product_service_1.ProductService.getProductById(productsId);
        if (result) {
            res.status(200).json({
                sucess: true,
                message: "Single Product fetched successfully",
                data: result,
            });
        }
        else {
            res.status(200).json({
                sucess: false,
                message: "Product not found",
                data: result,
            });
        }
    }
    catch (error) {
        console.log(error);
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productsId } = req.params;
        // console.log("this is req.param",req.params);
        const result = yield Product_service_1.ProductService.deleteProductFromDB(productsId);
        res.status(200).json({
            sucess: true,
            message: "Product deleted successfully",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productsId } = req.params;
        // console.log(id);
        const data = req.body;
        // console.log(data);
        const result = yield Product_service_1.ProductService.updateProductInDB(productsId, data);
        console.log(productsId);
        res.status(200).json({
            sucess: true,
            message: "Product updated successfully",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.ProductController = {
    createProduct,
    getProduct,
    getSingleProduct,
    deleteProduct,
    updateProduct,
};
