import { Request, Response } from "express";
import { OrderService } from "./Order.service";
import Joi from "joi";
import orderValidationSchema from "./Order.validation.schema";

const createOrder = async (req: Request, res: Response) => {
  try {
    
    const data = req.body.order;
    const {value,error} = orderValidationSchema.validate(data)
    if(error){
      res.status(400).json({
        success: false,
        message: error.message,
        data:error
      })
    }
  else{
    const result = await OrderService.orderCreateDB(value);
    res.status(200).json({
        success: true,
        message: "Order created successfully",
        data: result
    });
  }


    
  } catch (error) {
    console.log(error);
  }
};


const getOrder = async(req:Request, res:Response) => {
   try {
    const result= await OrderService.getOrderFromDB()
    res.status(200).json({
        success: true,
        message: "Order fetched successfully",
        data: result
    })
   } catch (error) {
    console.log(error);
   }
}


export const OrderController = {
    createOrder,
    getOrder,
}
