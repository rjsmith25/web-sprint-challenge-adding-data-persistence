const db = require("../../data/dbConfig");

function find() {
  return db("tasks")
    .select(
      "tasks.id",
      "tasks.notes",
      "tasks.description",
      "tasks.completed",
      "projects.name AS project_name",
      "projects.description AS project_description"
    )
    .join("projects", "tasks.project_id", "=", "projects.id");
}

function findById(id) {
  return db("tasks")
    .where({ id })
    .first();
}

function insert(task) {
  return db("tasks")
    .insert(task)
    .then(ids => {
      return findById(ids[0]);
    });
}

module.exports = { find, insert };
