import Product from "../models/Product";
import { Request, Response, NextFunction } from "express";

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { gender, colour } = req.query;

    const filter: any = {};

    if (gender) {
      filter.gender = gender;
    }

    if (colour) {
      filter.colour = colour;
    }
    console.log(colour);
    const products = await Product.find(filter);
    console.log(products);
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};
