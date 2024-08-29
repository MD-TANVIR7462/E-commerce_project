import { Tproduct } from "./product.interface";
import { productModel } from "./product.schemamodel";

const createProduct = async (product: Tproduct) => {
    const result = await productModel.create(product)
    return result
}
const getProduct = async () => {
    const result = await productModel.find()
    return result
}
const getSingleProduct = async (id: string) => {
    const result = await productModel.findById(id)
    return result
}
const deleteProduct = async (_id : string) => {

    const result = await productModel.deleteOne({_id})
    return result
}

export const produceServeices = {
    createProduct,
    getProduct,
    getSingleProduct,
    deleteProduct
}