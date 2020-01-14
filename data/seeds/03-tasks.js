exports.seed = async knex => {
   await knex("tasks").insert([
      {description: "Start It", project_id: 1, completed: 1},
      {description: "Do the thing", project_id: 1, completed: 0},
      {description: "Do the thing again", project_id: 1, completed: 0},
      {description: "You be done!", project_id: 1, completed: 0},
      {description: "It's in the name!!", project_id: 2, completed: 1, completed: 0},
      {description: "Do the thing", notes: "Do it quickly", project_id: 2, completed: 1},
      {description: "You be done!", project_id: 2, completed: 0},
      {description: "Start It", project_id: 3, completed: 0},
      {description: "Do the thing", notes: "Do it quickly", project_id: 3, completed: 0},
      {description: "Do the thing too", notes: "Do it mderately", project_id: 3, completed: 0},
      {description: "Do the thing again", notes: "Do it slowly", project_id: 3, completed: 0},
      {description: "You be done!", project_id: 3, completed: 0},
      {description: "Start It", project_id: 4, completed: 1},
      {description: "You be done!", project_id: 4, completed: 1},
      {description: "Start It", project_id: 5, completed: 0},
      {description: "Do the thing", project_id: 5, completed: 0},
      {description: "Do the thing again", project_id: 5, completed: 1},
      {description: "You be done!", project_id: 5, completed: 0},
   ]);
};