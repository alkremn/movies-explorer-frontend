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

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className='page'>
      <Switch>
        <Route path='/signin' component={Login} />
        <Route path='/signup' component={Register} />
        <Route exact path='/'>
          <Main loggedIn={loggedIn} />
        </Route>
        <Route path='/movies' component={Movies} />
        <Route path='/saved-movies' component={SavedMovies} />
        <Route path='/profile' loggedIn={loggedIn} component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
