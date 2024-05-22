"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const express_1 = __importDefault(require("express"));
const ProductController_1 = require("./ProductController");
const router = express_1.default.Router();
router.post("/products", ProductController_1.ProductController.createProduct);
router.get('/products', ProductController_1.ProductController.getProduct);
router.get('/products/:productsId', ProductController_1.ProductController.getSingleProduct);
router.delete('/products/:productsId', ProductController_1.ProductController.deleteProduct);
exports.ProductRouter = router;
