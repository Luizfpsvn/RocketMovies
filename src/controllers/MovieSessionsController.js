const { compare } = require("bcryptjs");
const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class MovieSessionsController {
  async create(request, response) {
    const { email, password } = request.body;

    const user = await knex("users").where({ email }).first();

    if (!user) {
      throw new AppError("Email and/or Password is wrong!", 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError("Email and/or Password is wrong!", 401);
    }

    return response.json(user);
  }
}

module.exports = MovieSessionsController;
