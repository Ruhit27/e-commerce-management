
import express from "express";
import { ProductController } from "./ProductController";

const router = express.Router();

router.post("/products", ProductController.createProduct);
router.get('/products',ProductController.getProduct)
router.get('/products/:productsId', ProductController.getSingleProduct)
router.delete('/products/:productsId', ProductController.deleteProduct)


export const ProductRouter = router;