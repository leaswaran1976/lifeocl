import React from "react";

import { useAuth0 } from "./contexts/auth0-context";
import Header from "./components/Header";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

import AdminLayout from "layouts/Admin.jsx";

function App() {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isLoading && !user && (
        <>
          <h1>Click Below!</h1>
          <button onClick={loginWithRedirect} className="button is-danger">
            Login
          </button>
        </>
      )}

      {!isLoading && user && (
        <BrowserRouter>
          <Switch>
            <Route
              path="/admin"
              render={(props) => <AdminLayout {...props} />}
            />

            <Redirect from="/" to="/admin/dashboard" />
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
