import { mainUrl } from "./constants";

class AuthApi {
  constructor() {
    this.baseUrl = mainUrl;
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

    return res.json().then((err) => Promise.reject(err.error));
  }

  register({ email, password, name }) {
    return this._makeRequest(
      `${this.baseUrl}/signup`,
      "POST",
      JSON.stringify({ email, password, name }),
      null
    );
  }

  login({ email, password }) {
    return this._makeRequest(
      `${this.baseUrl}/signin`,
      "POST",
      JSON.stringify({ email, password }),
      null
    );
  }

  checkToken(token) {
    return this._makeRequest(`${this.baseUrl}/users/me`, "GET", null, token);
  }
}

export default new AuthApi();
