import React from "react";
import { NavItem } from "react-bootstrap";
import { useAuth0 } from "../contexts/auth0-context";
import "./Header.css";

export default function UserSpecific() {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();

  return (
    <>
      {/* if there is no user. show the login button */}
      {!isLoading && !user && (
        <NavItem eventKey={3} href="{loginWithRedirect}">
          Login
        </NavItem>
      )}

      {/* if there is a user. show user name and logout button */}
      {!isLoading && user && (
        <NavItem eventKey={4}>
          {user.name}|
          <i
            className="fa fa-sign-out"
            onClick={() => logout({ returnTo: window.location.origin })}
          />
        </NavItem>
      )}
    </>
  );
}
