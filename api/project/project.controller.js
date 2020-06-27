const { find, insert, findProjectResources } = require("./project.model");

async function getAllProjects(req, res) {
  try {
    let projects = await find();
    res.status(200).json(projects);
  } catch (e) {
    res.status(500).json({ message: "Unable to get projects" });
  }
}

async function createProject(req, res) {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "name is required" });
  }

  try {
    const project = await insert(req.body);
    res.status(201).json(project);
  } catch (e) {
    res.status(500).json({ message: "Unable to create new project" });
  }
}

async function getProjectResources(req, res) {
  const { id } = req.params;
  try {
    const projectResources = await findProjectResources(id);
    res.status(200).json(projectResources);
  } catch (e) {
    res.status(500).json({ message: "Unable to get the project resources" });
  }
}

module.exports = { getAllProjects, createProject, getProjectResources };
