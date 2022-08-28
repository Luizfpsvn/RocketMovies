const { Router } = require("express");

const usersRouter = require("./users.routes");
const movieNotesRouter = require("./movieNotes.routes");
const movieTagsRouter = require("./movieTags.routes");
const movieSessionsRouter = require("./movieSessions.routes");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/notes", movieNotesRouter);
routes.use("/tags", movieTagsRouter);
routes.use("/sessions", movieSessionsRouter);

module.exports = routes;
