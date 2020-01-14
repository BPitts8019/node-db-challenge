const db = require("../data/db-config");
const TASKS = "tasks";

const completedToBoolean = task => {
   return {
      ...task, 
      completed: !!task.completed
   };
};

const find = async () => {
   const P = "projects";
   const T = TASKS;

   try {
      let tasks = await db
         .select(`${T}.*`, `${P}.name as project_name`, `${P}.description as project_desc`)
         .from(T)
         .join(P, `${P}.id`, `${T}.project_id`)
         .orderBy(`${T}.project_id`);
   
         if (tasks.length >= 0) {
            tasks = tasks.map(completedToBoolean);
         }

         return Promise.resolve(tasks);
   } catch (error) {
      return Promise.reject(error);
   }
};

const findByID = async task_id => {
   try {
      const task = await db(TASKS)
         .where({id: task_id})
         .first();
      
      if (!task) {
         return Promise.reject(new Error("No task with that ID"));
      }

      return Promise.resolve(completedToBoolean(task));
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