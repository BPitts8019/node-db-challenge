const router = require("express").Router();
const resourcesDB = require("./resources-model");

router.get("/", async (req, res, next) => {
   try {
      const resources = await resourcesDB.find();
      res.json(resources);
   } catch (error) {
      next(error);
   }
});

module.exports = router;