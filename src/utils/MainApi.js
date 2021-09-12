import { mainUrl, moviesBaseUrl } from "./constants";

class MainApi {
  constructor(token) {
    this.baseUrl = mainUrl;
    this.token = token;
  }
  _makeRequest(url, method, body) {
    return fetch(url, {
      method,
      headers: {
        authorization: this.token ? `Bearer ${this.token}` : "",
        "Content-Type": "application/json",
      },
      body,
    }).then((res) => this._checkResponse(res));
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getAllSavedMovies() {
    return this._makeRequest(`${this.baseUrl}/movies`, "GET");
  }

  createMovie(movieCard) {
    const movie = {
      movieId: movieCard.id,
      nameRU: movieCard.nameRU,
      nameEN: movieCard.nameEN,
      description: movieCard.description,
      duration: movieCard.duration,
      year: movieCard.year,
      image: `${moviesBaseUrl}${movieCard.image.url}`,
      trailer: movieCard.trailerLink,
      thumbnail: `${moviesBaseUrl}${movieCard.image.formats.thumbnail.url}`,
      director: movieCard.director,
      country: movieCard.country,
    };

    return this._makeRequest(
      `${this.baseUrl}/movies`,
      "POST",
      JSON.stringify(movie)
    );
  }

  removeSavedMovie(movieId) {
    return this._makeRequest(`${this.baseUrl}/movies/${movieId}`, "DELETE");
  }
}

export default new MainApi(localStorage.getItem("jwt"));
