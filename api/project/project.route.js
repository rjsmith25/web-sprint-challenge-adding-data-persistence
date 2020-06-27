const express = require("express");
const {
  getAllProjects,
  createProject,
  getProjectResources
} = require("./project.controller");

const projectRouter = express.Router();

projectRouter.get("/", getAllProjects);
projectRouter.get("/:id/resources", getProjectResources);
projectRouter.post("/", createProject);

module.exports = projectRouter;
