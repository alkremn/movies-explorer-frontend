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
import Preloader from "../Preloader/Preloader";

// Api
import authApi from "../../utils/AuthApi";

// Context
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

// Router
import { Switch, Route, withRouter } from "react-router-dom";

function App({ history }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState();

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
    setTimeout(() => {
      setServerError(null);
    }, 10000);
  }, [serverError]);

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
  }

  return (
    <div className='page'>
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
            component={Movies}
          />
          <ProtectedRoute
            path='/saved-movies'
            loggedIn={loggedIn}
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
        {isLoading && <Preloader />}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default withRouter(App);
