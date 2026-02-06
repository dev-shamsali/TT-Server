import { loginService } from "./auth.service.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  const data = await loginService(email, password);
  res.json(data);
};
