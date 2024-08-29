"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidat =
  exports.inventoryValidat =
  exports.variantsValidat =
    void 0;
const zod_1 = require("zod");
exports.variantsValidat = zod_1.z.object({
  type: zod_1.z.string().trim().nonempty("variant type is required"),
  value: zod_1.z.string().trim().nonempty("variant value is required"),
});
exports.inventoryValidat = zod_1.z.object({
  quantity: zod_1.z
    .number()
    .min(0, "inventory quantity must be a positive number"),
  inStock: zod_1.z.boolean().refine((val) => typeof val === "boolean", {
    message: "inStock must be a boolean",
  }),
});
exports.productValidat = zod_1.z.object({
  name: zod_1.z.string().trim().nonempty("product name is required"),
  description: zod_1.z.string().trim().nonempty("description is required"),
  price: zod_1.z.number().min(0, "price must be a positive number"),
  category: zod_1.z.string().trim().nonempty("category is required"),
  tags: zod_1.z.array(
    zod_1.z.string().trim().nonempty("tags must be non-empty strings")
  ),
  variants: zod_1.z
    .array(exports.variantsValidat)
    .nonempty("variants are required"),
  inventory: exports.inventoryValidat,
});
