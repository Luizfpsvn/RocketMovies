class MovieSessionsController {
  async create(request, response) {
    const { email, password } = request.body;

    return response.json({ email, password });
  }
}

module.exports = MovieSessionsController;
