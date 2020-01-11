const db = require("../data/db-config");
const PROJECTS = "projects";

//functions
const find = async () => {
   try {
      const projects = await db(PROJECTS);
   
      return Promise.resolve(
         projects.map(project => {
            return {
               ...project, 
               completed: !!project.completed
            };
         })
      );
   } catch (error) {
      return Promise.reject(error);
   }
};

const findByID = async project_id => {
   try {
      const project = await db(PROJECTS)
         .where({id: project_id})
         .first();
      
      return Promise.resolve({
         ...project,
         completed: !!project.completed
      });
   }  catch (error) {
      return Promise.reject(error);
   }
};

const add = async newProject => {
   try {
      const [id] = db(PROJECTS).insert(newProject);
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