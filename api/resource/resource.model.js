const db = require("../../data/dbConfig");

function find() {
  return db("resources");
}

function findById(id) {
  return db("resources")
    .where({ id })
    .first();
}

function insert(resourse) {
  return db("resources")
    .insert(resourse)
    .then(ids => {
      return findById(ids[0]);
    });
}

module.exports = { find, insert };
