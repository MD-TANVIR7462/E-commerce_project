import { Request, Response } from "express";
import { productValidat } from "./product.validation";
import { produceServeices } from "./product.services";

const createProduct = async (req: Request, res: Response) => {
    try {
        const product = req.body
        const validatedProduct = productValidat.parse(product)
        const result = await produceServeices.createProduct(validatedProduct)
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result
        })
    }
    catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Product not created!",
            errorDetails: {
                errorType: err.name,
                message: err.issues[0].message,
                errorPath: err.issues[0].path
            },

        })
    }
}



export const productControler = {
    createProduct,
}