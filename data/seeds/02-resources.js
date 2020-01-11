exports.seed = async knex => {
   await knex("resources").insert([
      {name: "resource-01", description: "This is resource 01"},
      {name: "resource-02", description: "This is resource 02"},
      {name: "resource-03", description: "This is resource 03"},
      {name: "resource-04", description: "This is resource 04"},
      {name: "resource-05", description: "This is resource 05"},
      {name: "resource-06", description: "This is resource 06"},
      {name: "resource-07", description: "This is resource 07"},
      {name: "resource-08", description: "This is resource 08"},
      {name: "resource-09", description: "This is resource 09"},
      {name: "resource-10", description: "This is resource 10"},
      {name: "resource-11", description: "This is resource 11"}
   ]);
};