import { moviesFetchUrl } from "../utils/constants";

class MoviesApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  _makeRequest(url, method) {}
}

export default new MoviesApi(moviesFetchUrl);
