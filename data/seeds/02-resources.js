exports.seed = function(knex) {
  return knex("resources").insert([
    { name: "Computer" },
    { name: "Operating System" },
    { name: "Computer Keyboard" },
    { name: "Computer Mouse" },
    { name: "Garden Rakes" },
    { name: "Garden Hoes" },
    { name: "Edger" },
    { name: "Wood" },
    { name: "hammer" },
    { name: "Screw Driver" },
    { name: "Screws" }
  ]);
};
