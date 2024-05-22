import { Request, Response } from "express";
import { ProductService } from "./Product.service";
import Joi from "joi";
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
    const { serchTerm } = search;
    console.log(serchTerm);

    if (serchTerm) {
      const result = await ProductService.getbySearchInDB(serchTerm);
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
  try {
    const { id } = req.params;
    console.log(id);
    const result = await ProductService.getProductById(id);
    res.status(200).json({
      sucess: true,
      message: "Single Product fetched successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await ProductService.deleteProductFromDB(id);
    res.status(200).json({
      sucess: true,
      message: "Product deleted successfully",
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
};
