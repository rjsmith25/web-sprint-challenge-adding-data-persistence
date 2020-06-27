exports.seed = function(knex) {
  return knex("projects").insert([
    {
      name: "Computer Room",
      description: "need a new computer room for students to work in"
    },
    {
      name: "Green Thumb",
      description: "My new house need a garden to make surrounding nicer"
    },
    {
      name: "Build Shed",
      description: "need new shed"
    }
  ]);
};
