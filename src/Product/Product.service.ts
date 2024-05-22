import { Tproduct } from "./Product.interface"
import { ProductModel } from "./Product.model"



const createProductInDB = async(product:Tproduct)=>{
    const result = await ProductModel.create(product)
    return result;

}

const getAllProductInDB = async()=>{
    const result = await ProductModel.find()
    return result;

}
const getbySearchInDB = async(searchTerm:any)=>{
    const result = await ProductModel.find({name:searchTerm})
    return result;

}

const getProductById = async(id:string)=>{
    const result = ProductModel.findById(id)
    return result;
}


const deleteProductFromDB=(id:string)=>{
    const result = ProductModel.deleteOne({_id : id})
    return result;
}



export const ProductService = {
    createProductInDB,
    getAllProductInDB,
    getProductById,
    deleteProductFromDB,
    getbySearchInDB
}