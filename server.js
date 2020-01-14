const express = require("express");
const helmet = require("helmet");
const projectsRouter = require("./projects/projects-router");
const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
   res.json({
      message: "Welcome to the Sprint Challenge API!"
   });
});

server.use("/api/projects", projectsRouter);
server.use("api/tasks", );

//404 Page not found
server.use((req, res) => {
   res.status(404).json({
      message: "Page Not Found!"
   });
});

//Global 500 Error
server.use((error, req, res, next) => {
   console.log(error.toString());
   res.status(500).json({
      data: error.toString()
   });
});

module.exports = server;