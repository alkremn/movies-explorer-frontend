import { useState } from "react";
import "./App.css";
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

import { Switch, Route, withRouter } from "react-router-dom";

function App({ history }) {
  const [loggedIn] = useState(false);

  function registerHandler(values) {
    console.log(values);
    history.push("/signin");
  }

  function loginHandler(values) {
    console.log(values);
    history.push("/movies");
  }

  return (
    <div className='page'>
      <Switch>
        <Route path='/signin'>
          <Login loggedIn={loggedIn} onLogin={loginHandler} />
        </Route>
        <Route path='/signup'>
          <Register loggedIn={loggedIn} onRegister={registerHandler} />
        </Route>
        <Route exact path='/'>
          <Header color='#073042' />
          <Main loggedIn={loggedIn} />
          <Footer />
        </Route>
        <ProtectedRoute path='/movies' loggedIn={loggedIn} component={Movies} />
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
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
