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

module.exports = router;