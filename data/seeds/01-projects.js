exports.seed = async knex => {
   await knex("projects").insert([
      {name: "project-01", description: "This is project 01", completed: 0},
      {name: "project-02", description: "This is project 02", completed: 0},
      {name: "project-03", description: "This is project 03", completed: 0},
      {name: "project-04", description: "This is project 04", completed: 1},
      {name: "project-05", description: "This is project 05", completed: 0}
   ]);
};