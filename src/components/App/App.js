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
import EditProfilePopup from "../EditProffilePopup/EditProfilePopup";
import Preloader from "../Preloader/Preloader";

// Api
import authApi from "../../utils/AuthApi";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";

//util functions
import {
  filterMovies,
  saveMoviesInLocalStorage,
  getMoviesFromLocalStorage,
  clearMoviesFromLocalStorage,
} from "../../utils/utils.js";

// constants
import { UPDATE_SUCCESS_MESSAGE } from "../../utils/constants";

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
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [isErrorOccurred, setIsErrorOccurred] = useState(false);
  const [isListEmpty, setIsListEmpty] = useState(false);

  // Other
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [serverResponseMessage, setServerResponseMessage] = useState("");
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [serverSuccess, setServerSuccess] = useState("");

  // UseEffects
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      setIsLoading(true);
      authApi
        .checkToken(token)
        .then((user) => {
          setCurrentUser(user);
          mainApi.updateToken(token);
        })
        .catch((err) => setServerResponseMessage(err));
      setLoggedIn(true);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      fetchSavedMovies();
      setSearchedMovies(getMoviesFromLocalStorage());
    }
  }, [loggedIn]);

  useEffect(() => {
    setTimeout(() => {
      setServerResponseMessage(null);
      setServerSuccess(null);
    }, 10000);
  }, [serverResponseMessage, serverSuccess]);

  function handleRegister(values) {
    setIsLoading(true);
    authApi
      .register(values)
      .then((user) => {
        onAuthorize(user);
      })
      .catch((err) => {
        setServerResponseMessage(err);
      })
      .finally(() => setIsLoading(false));
  }

  function handleLogin(values) {
    setIsLoading(true);
    authApi
      .login(values)
      .then((user) => {
        onAuthorize(user);
      })
      .catch((err) => {
        setServerResponseMessage(err);
      })
      .finally(() => setIsLoading(false));
  }

  function onAuthorize(user) {
    localStorage.setItem("jwt", user.token);
    setCurrentUser(user);
    mainApi.updateToken(user.token);
    setLoggedIn(true);
    history.push("/movies");
  }

  function handleLogout() {
    localStorage.removeItem("jwt");
    setCurrentUser(null);
    setLoggedIn(false);
    setSearchedMovies([]);
    setSavedMovies([]);
    clearMoviesFromLocalStorage();
  }

  function handleSearchMovies(searchTerm, isShortMovie) {
    if (movies.length === 0) {
      fetchMovies(searchTerm, isShortMovie);
    } else {
      updateMovieListAndStorage(movies, searchTerm, isShortMovie);
    }
  }

  function fetchMovies(searchTerm, isShortMovie) {
    setIsLoading(true);
    moviesApi
      .fetchMovies()
      .then((movies) => {
        setMovies(movies);
        updateMovieListAndStorage(movies, searchTerm, isShortMovie);
      })
      .catch((err) => setServerResponseMessage(err))
      .finally(() => setIsLoading(false));
  }

  function handleSearchSavedMovies(searchTerm, isShortMovie) {
    const fitleredSavedMovies = filterMovies(
      savedMovies,
      searchTerm,
      isShortMovie
    );

    if (fitleredSavedMovies.length === 0) {
      setIsListEmpty(true);
    } else {
      setIsListEmpty(false);
    }
    setFilteredSavedMovies(fitleredSavedMovies);
  }

  function updateMovieListAndStorage(movies, searchTerm, isShortMovie) {
    const filteredMovies = filterMovies(movies, searchTerm, isShortMovie);
    setSearchedMovies(filteredMovies);

    if (filteredMovies.length === 0) {
      setIsListEmpty(true);
    } else {
      setIsListEmpty(false);
    }
    saveMoviesInLocalStorage(filteredMovies);
  }

  function fetchSavedMovies() {
    mainApi
      .getAllSavedMovies(localStorage.getItem("jwt"))
      .then((savedMovies) => {
        setSavedMovies(savedMovies);
        setFilteredSavedMovies(savedMovies);
      })
      .catch((err) => {
        setIsErrorOccurred(true);
        setServerResponseMessage(err);
      });
  }

  function handleLikeMovieCard(movieCard) {
    const savedMovie = savedMovies.find(
      (movie) => movie.movieId === movieCard.id
    );

    if (savedMovie) {
      handleDeleteMovieCard(savedMovie._id);
    } else {
      createMovieCard(movieCard);
    }
  }

  function createMovieCard(movie) {
    mainApi
      .createMovie(movie)
      .then((newMovie) => {
        setSavedMovies([...savedMovies, newMovie]);
        setFilteredSavedMovies([...savedMovies, newMovie]);
      })
      .catch((err) => setServerResponseMessage(err));
  }

  function handleDeleteMovieCard(movieCardId) {
    mainApi
      .removeSavedMovie(movieCardId)
      .then(() => {
        setSavedMovies([
          ...savedMovies.filter((movie) => movie._id !== movieCardId),
        ]);
        setFilteredSavedMovies([
          ...filteredSavedMovies.filter((movie) => movie._id !== movieCardId),
        ]);
      })
      .catch((err) => setServerResponseMessage(err));
  }

  function handleUpdateUser(values) {
    setIsSaving(true);
    mainApi
      .updateUserInfo(values)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        setIsEditProfileOpen(false);
        setServerSuccess(UPDATE_SUCCESS_MESSAGE);
      })
      .catch((err) => {
        setServerResponseMessage(err);
      })
      .finally(() => setIsSaving(false));
  }

  function handleEditProfilePopupOpen() {
    setIsEditProfileOpen(true);
  }

  function handleCloseClick(e) {
    const classList = e.target.classList;
    if (classList.contains("popup")) {
      closeAllPopups();
    }
  }

  function closeAllPopups() {
    setIsEditProfileOpen(false);
  }

  return (
    <div className='page' onClick={handleCloseClick}>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route path='/signin'>
            <Login
              history={history}
              loggedIn={loggedIn}
              onLogin={handleLogin}
              serverResponseMessage={serverResponseMessage}
            />
          </Route>
          <Route path='/signup'>
            <Register
              loggedIn={loggedIn}
              onRegister={handleRegister}
              serverResponseMessage={serverResponseMessage}
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
            movies={searchedMovies}
            savedMovies={savedMovies}
            serverResponseMessage={serverResponseMessage}
            isErrorOccurred={isErrorOccurred}
            isListEmpty={isListEmpty}
            onLikeMovieCard={handleLikeMovieCard}
            onSearchSubmit={handleSearchMovies}
            component={Movies}
          />
          <ProtectedRoute
            path='/saved-movies'
            loggedIn={loggedIn}
            savedMovies={filteredSavedMovies}
            serverResponseMessage={serverResponseMessage}
            isErrorOccurred={isErrorOccurred}
            isListEmpty={isListEmpty}
            onDeleteMovieCard={handleDeleteMovieCard}
            onSearchSubmit={handleSearchSavedMovies}
            component={SavedMovies}
          />
          <ProtectedRoute
            path='/profile'
            isFooterInvisible={true}
            loggedIn={loggedIn}
            user={currentUser}
            onLogout={handleLogout}
            component={Profile}
            serverSuccess={serverSuccess}
            onEditProfilePopupOpen={handleEditProfilePopupOpen}
          />
          <Route component={NotFound} />
        </Switch>
        <EditProfilePopup
          isOpen={isEditProfileOpen}
          isLoading={isSaving}
          serverResponseMessage={serverResponseMessage}
          onUpdateUser={handleUpdateUser}
          onPopupClose={closeAllPopups}
        />
        {isLoading && <Preloader />}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default withRouter(App);
