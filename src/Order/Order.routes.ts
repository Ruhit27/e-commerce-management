import express from "express";
import { OrderController } from "./Order.controller";

const router = express.Router();

router.post("/orders", OrderController.createOrder);
router.get("/orders",OrderController.getOrder)

export const OrderRouter = router;
