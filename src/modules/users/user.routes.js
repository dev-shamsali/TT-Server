import {Router} from "express";
import auth from "../../middlewares/auth.middleware.js";
import role from "../../middlewares/role.middleware.js";
import { ROLES } from "../../config/constants.js";
import { createUser, getUsers } from "./user.controller.js";

const router = Router();

router.post("/", auth, role([ROLES.IT_ADMIN]), createUser);
router.get("/", auth, role([ROLES.IT_ADMIN]), getUsers);

export default router;