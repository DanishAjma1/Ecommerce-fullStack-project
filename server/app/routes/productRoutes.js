import { Router } from "express";
import Product from "../models/product.js";
import DBConnection from "../config/connectDB.js";
import multer from "multer";
import fs from "fs";
const productRouter = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = "uploads/";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

productRouter.post(
  "/adminPortal/insertProduct",
  upload.single("image"),
  async (req, res) => {
    try {
      await DBConnection();
      let imageUri = "";
      if (req.file) {
        imageUri = `${Date.now()}-${req.file.filename}`;
      }
      console.log(req.body);
      const product = new Product({
        ...req.body,
        imageUri: imageUri,
      });
      console.log(product);
      await product.save();
      res.status(201).json({ message: "product inserted successfully.." });
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

export default productRouter;
