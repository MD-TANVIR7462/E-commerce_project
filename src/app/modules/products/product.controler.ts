import { request, Request, Response } from "express";
import { productValidat } from "./product.validation";
import { produceServeices } from "./product.services";
import { Tproduct } from "./product.interface";

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
        if (result) {
            res.status(200).json({
                success: true,
                message: "Product deleted successfully!",
                data: result.result

            })
        }
        else {
            res.status(404).json({
                success: false,
                message: "Product not found!",
                errorDetails: {
                    errorType: "ProductNotFound",
                    message: "The product with the given ID was not found.",
                    errorPath: "id"
                }
            })
        }
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

const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const product: Partial<Tproduct> = req.body
        const result = await produceServeices.updateProduct(id, product)
        if (result) {
            res.status(200).json({
                success: true,
                message: "Product updated successfully!",
                data: result

            })
        }
        else {
            res.status(404).json({
                success: false,
                message: "Product not found!",
                errorDetails: {
                    errorType: "ProductNotFound",
                    message: "The product with the given ID was not found.",
                    errorPath: "id"
                }
            })
        }
    }
    catch (err: any) {
        res.status(500).json({
            success: false,
            message: "product not updated!",
            errorDetails: {
                errorType: err.name || "not identify",
                message: err.message || "please check carefuly and fixed the error it's form back-end",
                errorPath: "no path matching please check again"
            },
        })
    }
}



const searchProduct = async (req: Request, res: Response) => {
    try {
        const searchTerm = req.query.searchTerm as string || "";
        const result = await produceServeices.searchProduct(searchTerm);
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result
        });
    } catch (error: any) {
        console.error('Error searching products:', error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch products!",
            errorDetails: {
                errorType: error.name || "UnknownError",
                message: error.message || "An error occurred while fetching products.",
                errorPath: "searchTerm"
            }
        });
    }
};



export const productControler = {
    createProduct,
    getProducts,
    getSingleProducts,
    deleteProducts,
    updateProduct,
    searchProduct

}