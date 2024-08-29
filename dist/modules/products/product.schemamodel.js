"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productModel = void 0;
const mongoose_1 = require("mongoose");
const variantsSchema = new mongoose_1.Schema({
  type: {
    type: String,
    required: [true, "variant type  is required"],
    trim: true,
  },
  value: {
    type: String,
    required: [true, "variant value is required"],
    trim: true,
  },
});
const inventorySchema = new mongoose_1.Schema({
  quantity: {
    type: Number,
    required: [true, "inventory quantity is required"],
    trim: true,
  },
  inStock: {
    type: Boolean,
    required: [true, "inventory inStock is required"],
    trim: true,
  },
});
const productSchema = new mongoose_1.Schema({
  name: {
    type: String,
    required: [true, "product name is required"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "description is required"],
    trim: true,
  },
  price: { type: Number, required: [true, "price  is required"], trim: true },
  category: {
    type: String,
    required: [true, "category  is required"],
    trim: true,
  },
  tags: { type: [String], required: [true, "tags is required"], trim: true },
  variants: {
    type: [variantsSchema],
    required: [true, "variants is required"],
  },
  inventory: {
    type: inventorySchema,
    required: [true, "inventory is required"],
  },
});
// 3. Create a Model.
exports.productModel = (0, mongoose_1.model)("product", productSchema);
