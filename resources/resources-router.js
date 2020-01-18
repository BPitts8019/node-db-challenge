const router = require("express").Router();
const resourcesDB = require("./resources-model");

const validateResource = (req, res, next) => {
   let resourceData = {};

   if (!req.body.name || typeof req.body.name !== "string") {
      return res.status(400).json({message: "Please provide a name for this resource."});
   }
   resourceData.name = req.body.name;

   //Extra Fields
   if (req.body.description) {
      if (typeof req.body.description !== "string") {
         return res.status(400).json({message: "The description must be a string value."})
      }

      resourceData.description = req.body.description;
   }

   req.payload = resourceData;
   next();
};

router.get("/", async (req, res, next) => {
   try {
      const resources = await resourcesDB.find();
      res.json(resources);
   } catch (error) {
      next(error);
   }
});

router.post("/", validateResource, async (req, res, next) => {
   try {
      const newResource = await resourcesDB.add(req.payload);
      res.status(201).json(newResource);
   } catch (error) {
      next(error);
   }
});

module.exports = router;