const knex = require("../database/knex");

class MovieNotesController {
  async create(request,response) {
    const { title, description, rating, tags } = request.body;
    const { user_id } = request.params;

    const movie_notes_id = await knex("movie_notes").insert({
      title,
      description,
      rating,
      user_id
    });

    const tagsInsert = tags.map(name => {
      return {
        movie_notes_id,
        user_id,
        name
      }
    });

    await knex("movie_tags").insert(tagsInsert);

    return response.status(201).json();
  }
}

module.exports = MovieNotesController;