const db = require("../../data/dbConfig");

function find() {
  return db("projects");
}

function findById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function insert(project) {
  return db("projects")
    .insert(project)
    .then(ids => {
      return findById(ids[0]);
    });
}

function findProjectResources(id) {
  return db("project_resources")
    .select("resources.*")
    .join("resources", "project_resources.resource_id", "=", "resources.id")
    .where("project_resources.project_id", id);
}

module.exports = { find, insert, findProjectResources };
