import express from "express";
import { createServer } from "http";
import cors from "cors";
import productRouter from "./app/routes/productRoutes.js";
import adminProductRouter from "./app/routes/adminAccessProducts.js";
const app = express();
app.use(express.json());

// app.use(express.urlencoded({ extended: true }));
const server = createServer(app);
app.use(cors({
    origin: "http://localhost:3000",
    credentials:true,
}));
app.use('/uploads', express.static('uploads'));
app.use("/admin",adminProductRouter);
app.use("/products",productRouter);

app.use((err, req, res, next) => {
    res.status(500).json({ message: "Internal Server Error" });
});

server.listen(5000,()=> console.log("server is listening on port number 5000"));