import Product from "../models/Product";
import { Request, Response, NextFunction } from "express";

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { gender } = req.query;

    const filter: any = {};

    if (gender) {
      filter.gender = gender;
    }

    const products = await Product.find(filter);
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};
