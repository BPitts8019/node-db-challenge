const router = require("express").Router();
const tasksRouter = require("../tasks/tasks-router");
const projectsDB = require("./projects-model");

const validateProject = (req, res, next) => {
   let projectData;

   if (!req.body.name || typeof req.body.name !== "string") {
      return res.status(400).json({message: "Please provide a name for the project."});
   }

   projectData = {
      name: req.body.name
   };

   //extra fields
   if (req.body.description) {
      if (typeof req.body.description !== "string") {
         return res.status(400).json({message: "The description must be a string value."})
      }

      projectData.description = req.body.description;
   }

   if (req.body.completed) {
      if (typeof req.body.completed !== "boolean") {
         return res.status(400).json({message: "The completed field must be true or false."})
      }

      projectData.completed = Number(req.body.completed);
   }

   req.payload = projectData;
   next()
};

router.get("/", async (req, res, next) => {
   try {
      const projects = await projectsDB.find();
      res.json(projects);
   } catch (error) {
      next(error);
   }
});

router.post("/", validateProject, async (req, res, next) => {
   try {
      const newProject = await projectsDB.add(req.payload);
      res.json(newProject);
   } catch (error) {
      next(error);
   }
});

// router.get("/:id", async (req, res, next) => {
//    try {
//       const project = await projectsDB.findByID(req.params.id);
//       res.json(project);
//    } catch (error) {
//       next(error);
//    }
// });

router.use("/:id/tasks", tasksRouter);

module.exports = router;