exports.seed = async knex => {
   await knex("tasks").insert([
      {name: "Start It", description: "It's in the name!!", project_id: 1, completed: 1},
      {name: "Do It", description: "Do the thing", project_id: 1},
      {name: "Do It Again", description: "Do the thing again", project_id: 1},
      {name: "Finish It", description: "You be done!", project_id: 1},
      {name: "Start It", description: "It's in the name!!", project_id: 2, completed: 1},
      {name: "Do It", description: "Do the thing", notes: "Do it quickly", project_id: 2, completed: 1},
      {name: "Finish It", description: "You be done!", project_id: 2},
      {name: "Start It", description: "It's in the name!!", project_id: 3},
      {name: "Do It", description: "Do the thing", notes: "Do it quickly", project_id: 3},
      {name: "Do It too", description: "Do the thing too", notes: "Do it mderately", project_id: 3},
      {name: "Do It too 2", description: "Do the thing again", notes: "Do it slowly", project_id: 3},
      {name: "Finish It", description: "You be done!", project_id: 3},
      {name: "Start It", description: "It's in the name!!", project_id: 4, completed: 1},
      {name: "Finish It", description: "You be done!", project_id: 4, completed: 1},
      {name: "Start It", description: "It's in the name!!", project_id: 5},
      {name: "Do It", description: "Do the thing", project_id: 5},
      {name: "Do It Again", description: "Do the thing again", project_id: 5, completed: 1},
      {name: "Finish It", description: "You be done!", project_id: 5},
   ]);
};