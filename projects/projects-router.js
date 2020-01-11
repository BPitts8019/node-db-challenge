const router = require("express").Router();
const projectsDB = require("./projects-model");

router.get("/", async (req, res, next) => {
   try {
      const projects = await projectsDB.find();
      res.json(projects);
   } catch (error) {
      next(error);
   }
});

router.get("/:id", async (req, res, next) => {
   try {
      const project = await projectsDB.findByID(req.params.id);
      res.json(project);
   } catch (error) {
      next(error);
   }
});

module.exports = router;