import Project from "./project.modal.js";

export const createProjectService = (data) => Project.create(data);
export const getProjectService = () => Project.find();