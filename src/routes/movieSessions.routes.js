const { Router } = require("express");

const MovieSessionsController = require("../controllers/MovieSessionsController");
const movieSessionsController = new MovieSessionsController();

const movieSessionsRoutes = Router();

movieSessionsRoutes.post("/", movieSessionsController.create);

module.exports = movieSessionsRoutes;
