import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../users/user.model.js";
import { JWT } from "../../config/constants.js";

export const loginService = async (email, password) => {
  const user = await User.findOne({ email, isActive: true });

  if (!user) {
    return {
      success: false,
      message: "Invalid email or password"
    };
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return {
      success: false,
      message: "Invalid email or password"
    };
  }

  const payload = {
    userId: user._id,
    role: user.role
  };

  const accessToken = jwt.sign(
    payload,
    process.env.JWT_ACCESS_SECRET,
    { expiresIn: JWT.ACCESS_EXPIRES }
  );

  const refreshToken = jwt.sign(
    payload,
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: JWT.REFRESH_EXPIRES }
  );

  return {
    success: true,
    data: {
      accessToken,
      refreshToken,
      user
    }
  };
};
