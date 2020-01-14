const projectsDB = require("./projects-model");
const tasksDB = require("./tasks-model");

const validateTask = async (req, res, next) => {
   let taskData = {};

   if (!req.body.project_id || typeof req.body.project_id !== "number" || !Number.isInteger(req.body.project_id)) {
      return res.status(400).json({message: "Please provide a project ID for the task."});
   }

   const project = await projectsDB.findByID(req.body.project_id);
   if (!project) {
      return res.status(400).json({message: `No project found with ID: ${req.body.project_id}`});
   }
   taskData.project_id = req.body.project_id;

   if (!req.body.description || typeof req.body.description !== "string") {
      return res.status(400).json({message: "Please provide a description for the task."});
   }
   taskData.name = req.body.description;


   //extra fields
   if (req.body.notes) {
      if (typeof req.body.notes !== "string") {
         return res.status(400).json({message: "The notes must be a string value."})
      }

      taskData.notes = req.body.notes;
   }

   if (req.body.completed) {
      if (typeof req.body.completed !== "boolean") {
         return res.status(400).json({message: "The completed field must be true or false."})
      }

      taskData.completed = Number(req.body.completed);
   }

   req.payload = taskData;
   next()
};

router.get("/", async (req, res, next) => {
   try {
      const tasks = await tasksDB.find();
      res.json(tasks);
   } catch (error) {
      next(error);
   }
});

router.post("/", validateTask, async (req, res, next) => {
   try {
      const newTask = await tasksDB.add(req.payload);
      res.json(newTask);
   } catch (error) {
      next(error);
   }
});

// router.get("/:task_id", async (req, res, next) => {
//    try {
//       const project = await tasksDB.findByID(req.params.id);
//       res.json(project);
//    } catch (error) {
//       next(error);
//    }
// });

module.exports = router;