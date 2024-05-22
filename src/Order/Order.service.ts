import { Torder } from "./Order.interface";
import { OrderModel } from "./Order.model";

    const orderCreateDB = async(order:Torder)=>{
        const result = await OrderModel.create(order);
        return result;
    }

    const getOrderFromDB = async()=>{
        const result = await OrderModel.find();
        return result;

    }


 export const OrderService = {
    orderCreateDB,
    getOrderFromDB
 }   