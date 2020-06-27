const express = require("express");
const { getAllResources, createResource } = require("./resource.controller");

const resourceRouter = express.Router();

resourceRouter.get("/", getAllResources);
resourceRouter.post("/", createResource);

module.exports = resourceRouter;
