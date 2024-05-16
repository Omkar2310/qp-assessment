import { Request, Response } from "express";
import { userSchema } from "../utils/validation";
import { User } from "../db/models/user";

async function signIn(req: Request, res: Response) {
  try {
    console.log("Signing IN....");
  } catch (error) {}
}

async function signUp(req: Request, res: Response) {
  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  try {
    const newUser = await User.create(req.body);
    res.status(200).json({ message: "Added user successfully", data: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error in adding user" });
  }
}

export default { signIn, signUp };
