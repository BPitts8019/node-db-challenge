const db = require("../data/db-config");
const PROJECTS = "projects";

const completedToBoolean = project => {
   return {
      ...project, 
      completed: !!project.completed
   };
};
const find = async () => {
   try {
      let projects = await db(PROJECTS);
   
      if (projects.length >= 0) {
         projects = projects.map(completedToBoolean);
      }

      return Promise.resolve(projects);
   } catch (error) {
      return Promise.reject(error);
   }
};

const findByID = async project_id => {
   try {
      const project = await db(PROJECTS)
         .where({id: project_id})
         .first();
      
      if (!project) {
         return Promise.reject(new Error("No project with that ID"));
      }

      return Promise.resolve(completedToBoolean(project));
   }  catch (error) {
      return Promise.reject(error);
   }
};

const add = async newProject => {
   try {
      const [id] = await db(PROJECTS).insert(newProject);
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