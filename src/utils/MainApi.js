import { mainUrl } from "./constants";

class MainApi {
  constructor(token) {
    this.baseUrl = mainUrl;
    this.token = token;
  }
  _makeRequest(url, method, body, token) {
    return fetch(url, {
      method,
      headers: {
        authorization: token ? `Barer ${token}` : "",
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

  createMovie(movie) {
    return this._makeRequest(
      `${this.baseUrl}/movies`,
      "POST",
      JSON.stringify(movie),
      this.token
    );
  }
}

export default new MainApi();
