const { find, insert } = require("./task.model");

async function getAllTasks(req, res) {
  try {
    let tasks = await find();
    res.status(200).json(tasks);
  } catch (e) {
    res.status(500).json({ message: "Unable to get tasks" });
  }
}

async function createTask(req, res) {
  const { description, project_id } = req.body;

  if (!description || !project_id) {
    return res
      .status(400)
      .json({ message: "Missing description or project_id" });
  }

  try {
    const task = await insert(req.body);
    res.status(201).json(task);
  } catch (e) {
    res.status(500).json({ message: "Unable to create new task" });
  }
}

module.exports = { getAllTasks, createTask };
