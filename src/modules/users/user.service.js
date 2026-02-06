import User from "./user.modal.js";
import bcrypt from "bcryptjs";

export const createUserService = async (data) => {
  data.password = await bcrypt.hash(data.password, 10);
  return User.create(data);
};

export const getUsersService = async () => {
  return User.find({ isActive: true }).select("-password");
};
