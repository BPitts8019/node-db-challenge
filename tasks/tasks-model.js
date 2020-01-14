const db = require("../data/db-config");
const TASKS = "tasks";

//functions
const find = async () => {
   const P = "projects";
   const T = TASKS;

   try {
      const tasks = await db
         .select(`${T}.*`, `${P}.name as project_name`, `${P}.description as project_desc`)
         .from(T)
         .join(P, `${P}.id`, `${T}.project_id`)
         .orderBy(`${T}.project_id`);
   
      return Promise.resolve(
         tasks.map(task => {
            return {
               ...task, 
               completed: !!task.completed
            };
         })
      );
   } catch (error) {
      return Promise.reject(error);
   }
};

const findByID = async task_id => {
   try {
      const task = await db(TASKS)
         .where({id: task_id})
         .first();
      
      return Promise.resolve({
         ...task,
         completed: !!task.completed
      });
   }  catch (error) {
      return Promise.reject(error);
   }
};

const add = async newTask => {
   try {
      const [id] = await db(TASKS).insert(newTask);
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