import { mainUrl, moviesBaseUrl } from "./constants";

class MainApi {
  constructor() {
    this.baseUrl = mainUrl;
    this.token = localStorage.getItem("jwt");
  }
  _makeRequest(url, method, body, token) {
    return fetch(url, {
      method,
      headers: {
        authorization: token ? `Bearer ${token}` : "",
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

  getAllSavedMovies(token) {
    return this._makeRequest(`${this.baseUrl}/movies`, "GET", null, token);
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
      JSON.stringify(movie),
      this.token
    );
  }

  removeSavedMovie(movieId) {
    return this._makeRequest(
      `${this.baseUrl}/movies/${movieId}`,
      "DELETE",
      null,
      this.token
    );
  }

  updateUserInfo(values) {
    return this._makeRequest(
      `${this.baseUrl}/users/me`,
      "PATCH",
      JSON.stringify(values),
      this.token
    );
  }
}

export default new MainApi();
