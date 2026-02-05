import { Router } from "express";
import auth from '../../middlewares/auth.middleware.js'
import { createModule,getModules } from "./module.controller.js";

const router=Router()

router.post("/",auth,createModule);
router.get("/:projectId",auth,getModules);

export default router;   
