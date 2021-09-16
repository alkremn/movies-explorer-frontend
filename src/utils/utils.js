export function throttle(func, timeFrame) {
  var lastTime = 0;
  return function () {
    var now = new Date();
    if (now - lastTime >= timeFrame) {
      func();
      lastTime = now;
    }
  };
}

export function formatDuration(duration) {
  const hours = Math.floor(duration / 60);
  const mins = duration % 60;

  if (hours === 0) {
    return `${mins}м`;
  }

  return `${hours}ч ${mins}м`;
}

export function getFirstName(fullName) {
  return fullName.split(" ")[0];
}

export function filterMovies(movies, searchTerm, isShortMovie) {
  const filteredMovies = [];

  if (isShortMovie) {
    filteredMovies.push(...getShortMovies(movies));
  } else {
    filteredMovies.push(...movies);
  }

  return filteredMovies.filter((movie) => {
    return (
      movie.nameRU?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.director?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
}

export function getShortMovies(movies) {
  return movies.filter((movie) => movie.duration <= 40);
}

export function saveMoviesInLocalStorage(movies) {
  localStorage.setItem("movies", JSON.stringify(movies));
}

export function getMoviesFromLocalStorage() {
  const movies = JSON.parse(localStorage.getItem("movies"));
  if (movies) {
    return movies;
  }

  return [];
}

export function clearMoviesFromLocalStorage() {
  localStorage.removeItem("movies");
}

export function validateForm(errors, touched) {
  const formIsValid = !Object.values(errors).some((error) => error.length > 0);
  const untouched = !Object.values(touched).some(
    (touched) => touched === false
  );
  return formIsValid && untouched;
}
