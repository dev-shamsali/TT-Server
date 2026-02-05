import Module from "./module.modal";

export const createModuleService = (data) => Module.create(data);
export const getModulesByProject = (projectId) => Module.find({ projectId });
