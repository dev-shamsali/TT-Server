import {Router} from "express";
import auth from "../../middlewares/auth.middleware.js";
import role from "../../middlewares/role.middleware.js";
import {ROLES} from "../../config/constants.js";
import {createProject, getProjects} from "./project.controller.js";

const router = Router();

router.post("/", auth, role([ROLES.IT_ADMIN]), createProject);
router.get("/", auth, getProjects);

export default router;