import { Tproduct } from "../Product/Product.interface";
import { ProductModel } from "../Product/Product.model";
import { Torder } from "./Order.interface";
import { OrderModel } from "./Order.model";

const orderCreateDB = async (order: Torder) => {
  const result = await OrderModel.create(order);
  return result;
};

const productValidation = async (productId: string) => {
  const productFound: any = await ProductModel.findOne({ _id: productId });
  return productFound;
};




const InventoryCheck = async (productId: string) => {
  const productFound: any = await ProductModel.findOne({ _id: productId });
  const orderFound = await OrderModel.findOne({ productId: productId });
  let inventory = productFound.inventory.quantity;
  let inStock = productFound.inventory.inStock;
  if (inStock) {
    inventory = inventory - 1;
    console.log("this is result", productFound.inventory.quantity);
    const updatedProduct = await productFound.save();

    return updatedProduct;
  }
  else{
    console.log('Product is not in stock');
    return false;
  }
};

const getOrderFromDB = async () => {
  const result = await OrderModel.find();
  return result;
};

const getOrderInfoByEmail = async (email: any) => {
  const result = await OrderModel.find({ email: email });
  return result;
};

export const OrderService = {
  orderCreateDB,
  getOrderFromDB,
  productValidation,
  getOrderInfoByEmail,
  InventoryCheck
};
