// The authentication service is used to login and logout of the application,
// to login it posts the user's credentials to the /users/authenticate route
// on the api, if authentication is successful the user details including the
// token are added to local storage, and the current user is set in the
// application by calling currentUserSubject.next(user);.

// The logged in user details are stored in local storage so the user will stay
// logged in if they refresh the browser and also between browser sessions until
// they explicitly logout. If you don't want the user to stay logged in between
// refreshes or sessions the behaviour could easily be changed by storing user
// details somewhere less persistent such as session storage which would persist
// between refreshes but not browser sessions, or you could remove the calls to
// localStorage which would cause the user to be logged out if the browser is refreshed.

// There are two properties exposed by the authentication service for accessing the
// currently logged in user. The currentUser observable can be used when you want a
// component to reactively update when a user logs in or out, for example in the App.js
// component so it can show/hide the main nav bar when the user logs in/out. The
// currentUserValue property can be used when you just want to get the current value
// of the logged in user but don't need to reactively update when it changes, for
// example in the PrivateRoute.jsx component which restricts access to routes by
// checking if the user is currently logged in and authorised.

import { BehaviorSubject } from "rxjs";

//import config from "config";
import { handleResponse } from "../components/helpers";

const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem("currentUser"))
);

export const authenticationService = {
  login,
  logout,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  },
};

function login(username, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  };
  const url = "/users/authenticate"; //`${config.apiUrl}/users/authenticate`;

  return fetch(url, requestOptions)
    .then(handleResponse)
    .then((user) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem("currentUser", JSON.stringify(user));
      currentUserSubject.next(user);

      return user;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("currentUser");
  currentUserSubject.next(null);
}
