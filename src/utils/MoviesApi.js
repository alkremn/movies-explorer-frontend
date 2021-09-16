import { moviesBaseUrl } from "../utils/constants";

class MoviesApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  _makeRequest(url) {
    return fetch(url).then((res) => this._checkResponse(res));
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  fetchMovies() {
    return this._makeRequest(`${this.baseUrl}/beatfilm-movies`);
  }
}

export default new MoviesApi(moviesBaseUrl);
