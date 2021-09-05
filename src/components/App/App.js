import { useState, useEffect } from "react";
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
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className='page'>
      {loggedIn && <Header loggedIn={loggedIn} />}
      <Switch>
        <Route exact path='/signin' component={Login} />
        <Route path='/signup' component={Register} />
        <ProtectedRoute path='/movies' loggedIn={loggedIn} component={Movies} />
        <ProtectedRoute
          path='/saved-movies'
          loggedIn={loggedIn}
          component={SavedMovies}
        />
        <ProtectedRoute
          path='/profile'
          loggedIn={loggedIn}
          component={Profile}
        />
        <Route exact path='/'>
          <Main loggedIn={loggedIn} />
        </Route>
        <Route component={NotFound} />
      </Switch>
      {loggedIn && <Footer />}
    </div>
  );
}

export default withRouter(App);
