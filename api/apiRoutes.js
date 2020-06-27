const express = require("express");
const projectRouter = require("./project");
const resourceRouter = require("./resource");
const taskRouter = require("./task");

const apiRouter = express.Router();

apiRouter.use("/projects", projectRouter);
apiRouter.use("/resources", resourceRouter);
apiRouter.use("/tasks", taskRouter);

module.exports = apiRouter;
