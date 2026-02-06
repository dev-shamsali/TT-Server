import {createModuleService, getModulesByProject} from  "./module.service.js";

export const createModule = async (req, res) =>{
    res.json (await createModuleService(req.body));
};

export const getModules = async (req, res) => {
    res.json(await getModulesByProject(req.params.projectId));
};