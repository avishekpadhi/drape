import User from "../models/User";
import axios from "axios";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { oauth2client } from "../utils/googleConfig";
import { verifyGoogleUser } from "../services/authService";

export const googleLogin = async (req: Request, res: Response) => {
  try {
    const { code } = req.query;
    if (!code) {
      return res
        .status(400)
        .json({ message: "Missing 'code' query parameter" });
    }

    const googleRes = await oauth2client.getToken(code);
    oauth2client.setCredentials(googleRes.tokens);

    const { email, name } = await verifyGoogleUser(
      googleRes.tokens.access_token
    );

    const user =
      (await User.findOne({ email })) ?? (await User.create({ name, email }));

    const { _id } = user;
    const token = jwt.sign({ _id, email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_TIMEOUT,
    });

    return res.status(200).json({
      message: "Success",
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
