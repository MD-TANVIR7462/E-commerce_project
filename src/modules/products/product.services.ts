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
const deleteProduct = async (_id: string) => {
    const isDeletedProduct = await productModel.findById(_id)
    if (isDeletedProduct) {
        const result = await productModel.findByIdAndUpdate(_id, { $set: { "inventory.inStock": false } }, { new: true })
        return { result }
    }
    else {
        return null
    }
}
const updateProduct = async (_id: string,updatedProduct:Partial<Tproduct>) => {
    const isProduct = await productModel.findById(_id)
    if (isProduct) {
        const result = await productModel.findByIdAndUpdate(_id, { $set: {updatedProduct} }, { new: true })
        return { result }
    }
    else {
        return null
    }
}

export const produceServeices = {
    createProduct,
    getProduct,
    getSingleProduct,
    deleteProduct,
    updateProduct
}