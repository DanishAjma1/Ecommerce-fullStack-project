import express from "express";
// import { createServer } from "http";
import cors from "cors";
import productRouter from "./app/routes/productRoutes.js";
import adminProductRouter from "./app/routes/adminAccessProducts.js";
const app = express();
app.use(express.json());

// app.use(express.urlencoded({ extended: true }));
// const server = createServer(app);
// const allowedOrigins = [
//   "http://localhost:3000",
//   process.env.FRONTEND_VERCEL_URL
// ];
app.use(cors({ origin: '*', 
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use("/uploads", express.static("uploads"));
app.use("/api/admin", adminProductRouter);
app.use("/api/products", productRouter);

app.use((err, req, res, next) => {
  res.status(500).json({ message: "Internal Server Error" });
});
app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from backend!" });
});
console.log("backend is running");
// server.listen(5000, () => {
//   console.log("Server is running on port 5000");
// });
export default app;