import React from "react";
import { Route, Redirect } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function ProtectedRoute({
  loggedIn,
  component: Component,
  isFooterInvisible,
  ...props
}) {
  return (
    <Route>
      <Header loggedIn={loggedIn} />
      {loggedIn ? <Component {...props} /> : <Redirect to='signin' />}
      {!isFooterInvisible && <Footer />}
    </Route>
  );
}

export default ProtectedRoute;
