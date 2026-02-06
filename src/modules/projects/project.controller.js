import { createProjectService, getProjectService } from "./project.service.js";

export const createProjet = async (req, res) => {
    const project = await createProjectService(req.body);
    res.status(201).json(project);
};

export const getProject = async (req, res) => {
    res.json (await getProjectService());
};
