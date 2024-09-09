import { z } from 'zod';

export const variantsValidat = z.object({
    type: z.string().trim().nonempty("variant type is required"),
    value: z.string().trim().nonempty("variant value is required")
});

export const inventoryValidat = z.object({
    quantity: z.number().min(0, "inventory quantity must be a positive number"),
    inStock: z.boolean().refine(val => typeof val === 'boolean', {
        message: "inStock must be a boolean",
    })
});

export const productValidat = z.object({
    name: z.string().trim().nonempty("product name is required"),
    description: z.string().trim().nonempty("description is required"),
    price: z.number().min(0, "price must be a positive number"),
    category: z.string().trim().nonempty("category is required"),
    tags: z.array(z.string().trim().nonempty("tags must be non-empty strings")),
    variants: z.array(variantsValidat).nonempty("variants are required"),
    inventory: inventoryValidat
});
