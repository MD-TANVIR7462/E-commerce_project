import { Tproduct } from "./product.interface";
import { productModel } from "./product.schemamodel";

const createProduct = async (product: Tproduct) => {
    const result = await productModel.create(product)
    return result
}

export const produceServeices = {
    createProduct
}