const router = require("express").Router({
	mergeParams: true,
});
const tasksDB = require("./tasks-model");

const validateTask = (req, res, next) => {
   let taskData;

   if (!req.body.description || typeof req.body.description !== "string") {
      return res.status(400).json({message: "Please provide a description for the task."});
   }

   taskData = {
      name: req.body.description
   };

   //extra fields
   if (req.body.notes) {
      if (typeof req.body.notes !== "string") {
         return res.status(400).json({message: "The notes must be a string value."})
      }

      taskData.notes = req.body.notes;
   }

   if (req.body.completed) {
      if (typeof req.body.completed !== "boolean") {
         return res.status(400).json({message: "The completed field  must be true or false."})
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
      const newProject = await tasksDB.add(req.payload);
      res.json(newProject);
   } catch (error) {
      next(error);
   }
});

router.get("/:task_id", async (req, res, next) => {
   try {
      const project = await tasksDB.findByID(req.params.id);
      res.json(project);
   } catch (error) {
      next(error);
   }
});

module.exports = router;