const db = require("../data/db-config");
const RESOURCES = "resources";

//functions
const find = () => {
   return db(RESOURCES);
};

const findByID = resource_id => {
   return db(RESOURCES)
      .where({id: resource_id})
      .first();
};

const add = async newResource => {
   try {
      const [id] = await db(RESOURCES).insert(newResource);
      return findByID(id);
   }  catch (error) {
      return Promise.reject(error);
   }
}

module.exports = {
   find,
   findByID,
   add
};