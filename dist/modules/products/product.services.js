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
exports.produceServeices = void 0;
const product_schemamodel_1 = require("./product.schemamodel");
const createProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_schemamodel_1.productModel.create(product);
    return result;
});
const getProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_schemamodel_1.productModel.find();
    return result;
});
const getSingleProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_schemamodel_1.productModel.findById(id);
    return result;
});
const deleteProduct = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const isDeletedProduct = yield product_schemamodel_1.productModel.findById(_id);
    if (isDeletedProduct) {
        const result = yield product_schemamodel_1.productModel.findByIdAndUpdate(_id, { $set: { "inventory.inStock": false } }, { new: true });
        return { result };
    }
    else {
        return null;
    }
});
const updateProduct = (_id, updatedProduct) => __awaiter(void 0, void 0, void 0, function* () {
    const isProduct = yield product_schemamodel_1.productModel.findById(_id);
    if (isProduct) {
        const result = yield product_schemamodel_1.productModel.findByIdAndUpdate(_id, { $set: updatedProduct }, { new: true });
        return result;
    }
    else {
        return null;
    }
});
exports.produceServeices = {
    createProduct,
    getProduct,
    getSingleProduct,
    deleteProduct,
    updateProduct
};
