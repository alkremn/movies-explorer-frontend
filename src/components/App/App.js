import { useState, useEffect } from "react";
import "./App.css";

// Components
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import MovieCardPopup from "../MovieCardPopup/MovieCardPopup";
import Preloader from "../Preloader/Preloader";

// Api
import authApi from "../../utils/AuthApi";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";

// Context
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

// Router
import { Switch, Route, withRouter } from "react-router-dom";

function App({ history }) {
  // Auth
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  // Movies
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Other
  const [isMoviePopupOpen, setIsMoviePopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState();

  // UseEffects
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      setIsLoading(true);
      authApi
        .checkToken(token)
        .then((res) => setCurrentUser(res))
        .catch((err) => console.log(err));
      setLoggedIn(true);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      fetchData();
    }
  }, [loggedIn]);

  useEffect(() => {
    setTimeout(() => {
      setServerError(null);
    }, 10000);
  }, [serverError]);

  // Functions
  function fetchData() {
    setIsLoading(true);
    Promise.all([moviesApi.fetchMovies(), mainApi.getAllSavedMovies()])
      .then(([movies, savedMovies]) => {
        setMovies(movies);
        setSavedMovies(savedMovies);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  function registerHandler(values) {
    setIsLoading(true);
    authApi
      .register(values)
      .then((user) => {
        localStorage.setItem("jwt", user.token);
        setCurrentUser(user);
        setLoggedIn(true);
        history.push("/movies");
      })
      .catch((err) => {
        setServerError(err);
      })
      .finally(() => setIsLoading(false));
  }

  function loginHandler(values) {
    setIsLoading(true);
    authApi
      .login(values)
      .then((user) => {
        localStorage.setItem("jwt", user.token);
        setCurrentUser(user);
        setLoggedIn(true);
        history.push("/movies");
      })
      .catch((err) => {
        setServerError(err);
      })
      .finally(() => setIsLoading(false));
  }

  function logoutHandler() {
    localStorage.removeItem("jwt");
    setCurrentUser(null);
    setLoggedIn(false);
    setMovies([]);
    setSavedMovies([]);
  }

  function moviePopupOpenHandler(movieCard) {
    setSelectedMovie(movieCard);
    setIsMoviePopupOpen(true);
  }

  function likeMovieCardHandler(movieCard) {
    const savedMovie = savedMovies.find(
      (movie) => movie.movieId === movieCard.id
    );

    if (savedMovie) {
      deleteMovieCardHandler(savedMovie._id);
    } else {
      createMovieCardHandler(movieCard);
    }
  }

  function createMovieCardHandler(movie) {
    mainApi
      .createMovie(movie)
      .then((newMovie) => setSavedMovies([...savedMovies, newMovie]))
      .catch((err) => console.log(err));
  }

  function deleteMovieCardHandler(movieCardId) {
    mainApi
      .removeSavedMovie(movieCardId)
      .then(() =>
        setSavedMovies([
          ...savedMovies.filter((movie) => movie._id !== movieCardId),
        ])
      )
      .catch((err) => console.log(err));
  }

  function handleCloseClick(e) {
    const classList = e.target.classList;
    if (classList.contains("popup")) {
      closeAllPopups();
    }
  }

  function closeAllPopups() {
    setIsMoviePopupOpen(false);
  }

  return (
    <div className='page' onClick={handleCloseClick}>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route path='/signin'>
            <Login
              loggedIn={loggedIn}
              onLogin={loginHandler}
              serverError={serverError}
            />
          </Route>
          <Route path='/signup'>
            <Register
              loggedIn={loggedIn}
              onRegister={registerHandler}
              serverError={serverError}
            />
          </Route>
          <Route exact path='/'>
            <Header color='#073042' loggedIn={loggedIn} />
            <Main loggedIn={loggedIn} />
            <Footer />
          </Route>
          <ProtectedRoute
            path='/movies'
            loggedIn={loggedIn}
            movies={movies}
            savedMovies={savedMovies}
            onLikeMovieCard={likeMovieCardHandler}
            onMoviePopupOpen={moviePopupOpenHandler}
            component={Movies}
          />
          <ProtectedRoute
            path='/saved-movies'
            loggedIn={loggedIn}
            savedMovies={savedMovies}
            onDeleteMovieCard={deleteMovieCardHandler}
            onMoviePopupOpen={moviePopupOpenHandler}
            component={SavedMovies}
          />
          <ProtectedRoute
            path='/profile'
            isFooterInvisible={true}
            loggedIn={loggedIn}
            component={Profile}
            user={currentUser}
            onLogout={logoutHandler}
          />
          <Route component={NotFound} />
        </Switch>
        <MovieCardPopup isOpen={isMoviePopupOpen} onClose={closeAllPopups} />
        {isLoading && <Preloader />}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default withRouter(App);
