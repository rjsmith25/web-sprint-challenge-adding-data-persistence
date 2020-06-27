const express = require("express");
const { getAllTasks, createTask } = require("./task.controller");

const taskRouter = express.Router();

taskRouter.get("/", getAllTasks);
taskRouter.post("/", createTask);

module.exports = taskRouter;
