"use server";
import Product from "../models/Product";
import connect from "../lib/db";
import { z } from "zod";

const FormSchema = z.object({
  description: z.string(),
  brand: z.string(),
  price: z.coerce.number(),
  unit: z.string(),
  discount: z.coerce.number(),
  category: z.string(),
});

//const CreateProduct = FormSchema;

export async function createProduct(formData: FormData) {
  try {
    await connect();
    const { description, brand, price, unit, discount, category } =
      FormSchema.parse({
        description: formData.get("description"),
        brand: formData.get("brand") || "",
        price: formData.get("price"),
        unit: formData.get("unit"),
        discount: formData.get("discount"),
        category: formData.get("category") || "",
      });

    await Product.create({
      description: description,
      brand: brand,
      price: price,
      unit: unit,
      discount: discount,
      category: category,
    });
    console.log("Product created");
  } catch (err) {
    console.log("Error creating product", err);
  }
}

export async function getProducts() {
  try {
    await connect();
    const products = await Product.find({});
    return products;
  } catch (err) {
    console.log("Error getting products", err);
    return [];
  }
}

export async function editProduct(formData: FormData) {
  try {
    await connect();
    const products = Product.find({});
    return products;
  } catch (err) {
    console.log("Error getting products", err);
    return [];
  }
}

export async function searchProducts(formData: FormData) {
  try {
    await connect();
  } catch (err) {
    console.log("Error searching products", err);
    return [];
  }
}
