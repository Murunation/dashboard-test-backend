import express from "express";
import { getBrand } from "../services/emp-service.js";

const Brand = express.Router();

Brand.get("/brands", async (req, res) => {
  let brand = await getBrand();
  res.send(brand).status(200);
});

export default Brand;
