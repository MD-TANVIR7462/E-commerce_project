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
                errorType: err.name || "not identify",
                message: err.issues[0].message || "please check carefuly and fixed the error it's form back-end",
                errorPath: err.issues[0].path || "no path matching please check again"
            },

        })
    }
}

const getProducts = async (req: Request, res: Response) => {
    try {
        const result = await produceServeices.getProduct()
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result
        })
    }
    catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Products not fetched!",
            errorDetails: {
                errorType: err.name || "not identify",
                message: err.message || "please check carefuly and fixed the error it's form back-end",
                errorPath: "no path matching please check again"
            },
        })
    }
}

const getSingleProducts = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const result = await produceServeices.getSingleProduct(id)
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result
        })
    }
    catch (err: any) {
        res.status(500).json({
            success: false,
            message: "The Product not Founded!",
            errorDetails: {
                errorType: err.name || "not identify",
                message: err.message || "please check carefuly and fixed the error it's form back-end",
                errorPath: "no path matching please check again"
            },
        })
    }
}

const deleteProducts = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const result = await produceServeices.deleteProduct(id)
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: result
        })
    }
    catch (err: any) {
        res.status(500).json({
            success: false,
            message: "product not deletd!",
            errorDetails: {
                errorType: err.name || "not identify",
                message: err.message || "please check carefuly and fixed the error it's form back-end",
                errorPath: "no path matching please check again"
            },
        })
    }
}








export const productControler = {
    createProduct,
    getProducts,
    getSingleProducts,
    deleteProducts

}