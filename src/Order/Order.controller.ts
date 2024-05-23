import { Request, Response, query } from "express";
import { OrderService } from "./Order.service";
import orderValidationSchema from "./Order.validation.schema";

const createOrder = async (req: Request, res: Response) => {
  try {
    const data = req.body.order;
    const { value, error } = orderValidationSchema.validate(data);
    const afterChecking = await OrderService.productValidation(value.productId);
    if (afterChecking) {
      const result = await OrderService.orderCreateDB(value);
      res.status(200).json({
        success: true,
        message: "Order created successfully",
        data: result,
      });
    } else {
      res.status(400).json({
        success: false,
        messege: "Product not found",
        data: error,
      });
    }
  } catch (error) {
    console.log(error);
  }
};


// get all orders or get orders by email
const getOrder = async (req: Request, res: Response) => {
  const email = req.query.email;
  const getOrderByEmail = await OrderService.getOrderInfoByEmail(email);
  const getAllOrders = await OrderService.getOrderFromDB();

  if (email) {
    console.log("this is getOrderByEmail", getOrderByEmail);
    try {
      res.status(400).json({
        success: true,
        message: "Order by email fetched successfully",
        data: getOrderByEmail,
      });
    } catch (error) {
      console.log(error);
    }
    // ....
  } else {
    try {
      res.status(400).json({
        success: true,
        message: "Order fetched successfully",
        data: getAllOrders,
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export const OrderController = {
  createOrder,
  getOrder,
};
