import mongoose from "mongoose";
import { Router } from "express";
import DBConnection from "../config/connectDB.js";
import Product from "../models/product.js";
const productRouter = Router();

productRouter.get("/getProducts", async (req, res) => {
  try {
    await DBConnection();
    const products = await Product.find();
    res
      .status(200)
      .json(products);
  } catch (err) {
    console.log(err);
    res
      .status(401)
      .json({ message: "bad request while fetching the products" });
  }
});
productRouter.get("/get-products-with-id", async (req, res) => {
  try {
    const id = req.query.id;
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid or missing product id" });
    }
    await DBConnection();
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    console.log(product);
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server error while fetching the product with id",
    });
  }
});

export default productRouter;