"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productControler = void 0;
const product_validation_1 = require("./product.validation");
const product_services_1 = require("./product.services");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        const validatedProduct = product_validation_1.productValidat.parse(product);
        const result = yield product_services_1.produceServeices.createProduct(validatedProduct);
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Product not created!",
            errorDetails: {
                errorType: err.name || "not identify",
                message: err.issues[0].message || "please check carefuly and fixed the error it's form back-end",
                errorPath: err.issues[0].path || "no path matching please check again"
            },
        });
    }
});
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_services_1.produceServeices.getProduct();
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Products not fetched!",
            errorDetails: {
                errorType: err.name || "not identify",
                message: err.message || "please check carefuly and fixed the error it's form back-end",
                errorPath: "no path matching please check again"
            },
        });
    }
});
const getSingleProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield product_services_1.produceServeices.getSingleProduct(id);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "The Product not Founded!",
            errorDetails: {
                errorType: err.name || "not identify",
                message: err.message || "please check carefuly and fixed the error it's form back-end",
                errorPath: "no path matching please check again"
            },
        });
    }
});
const deleteProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield product_services_1.produceServeices.deleteProduct(id);
        if (result) {
            res.status(200).json({
                success: true,
                message: "Product deleted successfully!",
                data: result.result
            });
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
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "product not deletd!",
            errorDetails: {
                errorType: err.name || "not identify",
                message: err.message || "please check carefuly and fixed the error it's form back-end",
                errorPath: "no path matching please check again"
            },
        });
    }
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = req.body;
        const result = yield product_services_1.produceServeices.updateProduct(id, product);
        if (result) {
            res.status(200).json({
                success: true,
                message: "Product updated successfully!",
                data: result
            });
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
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "product not updated!",
            errorDetails: {
                errorType: err.name || "not identify",
                message: err.message || "please check carefuly and fixed the error it's form back-end",
                errorPath: "no path matching please check again"
            },
        });
    }
});
exports.productControler = {
    createProduct,
    getProducts,
    getSingleProducts,
    deleteProducts,
    updateProduct
};
