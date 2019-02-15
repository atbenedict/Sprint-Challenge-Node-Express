const express = require("express");

const actionRouter = require("./data/helpers/action-router");
const projectRouter = require("./data/helpers/project-router");

const server = express();

server.use(express.json());

server.use("/api/project", projectRouter);
server.use("/api/action", actionRouter);

server.get("/", async (req, res, next) => {
  res.send(`
    <h2>Super Cool API</h2>
    <p>Welcome to Andrew's API</p>
    `);
});

server.use(errorHandler);

function errorHandler(error, req, res, next) {
  res.status(400).json({ message: "ERROR ERROR ERROR", error });
}

module.exports = server;
