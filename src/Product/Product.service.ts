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
    const result = await ProductModel.findOne({name:searchTerm})
    return result;

}

const getProductById = async(id:string)=>{
    const result = await ProductModel.findById(id)
    return result;
}


const deleteProductFromDB=async(id:string)=>{
    const result = await ProductModel.deleteOne({_id : id})
    return result;
}



const updateProductInDB= async(id:string,data:object)=>{
    console.log("inside UpdateProduct",data);
    console.log("this is id",id);
    const result = await ProductModel.findOneAndUpdate({_id : id},data,{new:true});
    console.log("this is my UpdateProducgt result",result);
    return result;
}



export const ProductService = {
    createProductInDB,
    getAllProductInDB,
    getProductById,
    deleteProductFromDB,
    getbySearchInDB,
    updateProductInDB
}