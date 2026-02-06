import { createUserService, getUsersService } from "./user.service.js";

export const createUser = async (req, res) => {
  const user = await createUserService(req.body);
  return res.status(201).json(user);
};

export const getUsers = async (req, res) => {
  const users = await getUsersService();
  return res.status(200).json(users);
};
