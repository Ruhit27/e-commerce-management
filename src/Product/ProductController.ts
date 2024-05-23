import { Request, Response } from "express";
import { ProductService } from "./Product.service";
import productValidationSchema from "./Product.validation.schema";

const createProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body.product;
    const { value, error } = productValidationSchema.validate(data);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
        data: error,
      });
    } else {
      const result = await ProductService.createProductInDB(value);
      res.status(200).json({
        sucess: true,
        message: "Product created successfully",
        data: result,
      });
    }
  } catch (error) {}
};

const getProduct = async (req: Request, res: Response) => {
  try {
    const search = req.query;
    // console.log("inside and getProduct search",search);
    const  {searchTerm}  = search;
    // console.log("inside and getProduct searchTerm",searchTerm);
    if (searchTerm) {
      const result = await ProductService.getbySearchInDB(search.searchTerm);
      res.status(200).json({
        sucess: true,
        message: "Product fetched successfully",
        data: result,
      });
    } else {
      const result = await ProductService.getAllProductInDB();
      res.status(200).json({
        sucess: true,
        message: "Product fetched successfully",
        data: result,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  // console.log("inside getSingleProduct");
  try {
    const { productsId } = req.params;
    // console.log("something", productsId);
    const result = await ProductService.getProductById(productsId);
    if (result) {
      res.status(200).json({
        sucess: true,
        message: "Single Product fetched successfully",
        data: result,
      });
    } else {
      res.status(200).json({
        sucess: false,
        message: "Product not found",
        data: result,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productsId } = req.params;
    // console.log("this is req.param",req.params);
    const result = await ProductService.deleteProductFromDB(productsId);
    res.status(200).json({
      sucess: true,
      message: "Product deleted successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productsId } = req.params;
    // console.log(id);
    const data = req.body;
    // console.log(data);
    const result = await ProductService.updateProductInDB(productsId, data);

    console.log(productsId);
    res.status(200).json({
      sucess: true,
      message: "Product updated successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};



export const ProductController = {
  createProduct,
  getProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
};
