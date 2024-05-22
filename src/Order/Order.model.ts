import { Schema, model } from "mongoose";
import { Torder } from "./Order.interface";

 
 const OrderSchema = new Schema<Torder>({
    email: 
    { type: String, required: true },
    productId: 
    { type: String, required: true },
    price: 
    { type: Number, required: true },
    quantity: 
    { type: Number, required: true }
 });


 export const OrderModel = model<Torder>('order',OrderSchema)