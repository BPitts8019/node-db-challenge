const PROJECTS = "projects";
const RESOURCES = "resources";
const TASKS = "tasks";
const PROJECTS_RESOURCES = "projects_resources";

exports.up = async function(knex) {
   await knex.schema.createTable(PROJECTS, table => {
      table.increments("id");
      table.string("name")
         .notNullable();
      table.text("description")
      table.boolean("completed")
         .defaultTo(0);
   });
   await knex.schema.createTable(RESOURCES, table => {
      table.increments("id");
      table.string("name")
         .unique()
         .notNullable();
      table.text("description");
   });
   await knex.schema.createTable(TASKS, table => {
      table.increments("id");
      table.integer("project_id")
         .unsigned()
         .notNullable()
         .references("id").inTable(PROJECTS)
         .onDelete("CASCADE")
         .onUpdate("CASCADE");
      table.text("description")
         .notNullable();
      table.text("notes");
      table.boolean("completed")
         .defaultTo(0);
   });
   await knex.schema.createTable(PROJECTS_RESOURCES, table => {
      table.integer("project_id")
         .unsigned()
         .notNullable()
         .references("id").inTable(PROJECTS)
         .onDelete("CASCADE")
         .onUpdate("CASCADE");
      table.integer("resource_id")
         .unsigned()
         .notNullable()
         .references("id").inTable(RESOURCES)
         .onDelete("CASCADE")
         .onUpdate("CASCADE");
   });
};

exports.down = async function(knex) {
   await knex.schema.dropTableIfExists(TASKS);
   await knex.schema.dropTableIfExists(RESOURCES);
   await knex.schema.dropTableIfExists(PROJECTS);
};
