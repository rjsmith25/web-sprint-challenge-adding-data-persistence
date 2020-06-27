exports.seed = function(knex) {
  return knex("tasks").insert([
    { description: "setup computers, setup keyboard and mouse", project_id: 1 },
    { description: "Use Gardening rakes and plant flowers", project_id: 2 },
    {
      description: "Get Wood, screws and hammer to start building walls",
      project_id: 3
    }
  ]);
};
