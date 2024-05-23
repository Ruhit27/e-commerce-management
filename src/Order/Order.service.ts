import { error } from "console";
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

const InventoryCheck = async (productId: string, orderQuantity: number) => {
  const productFound: any = await ProductModel.findOne({ _id: productId });
    // console.log("Product purchasing",productFound);
  let productQuantity = productFound.inventory.quantity;
//   console.log(productQuantity);
//   console.log(productFound);
  //   console.log("Order data",orderQuantity);
  

  const remaingQuantity = productQuantity - orderQuantity;
    // console.log("remaining quantity",remaingQuantity);

  if (remaingQuantity >= 0) {
    const updateProduct = await  ProductModel.findOneAndUpdate({_id: productId},{inventory:{quantity: remaingQuantity}});
    return updateProduct;
  } else {
    return error;
  }
};

//

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
  InventoryCheck,
};
