// The user service contains just a couple of methods for retrieving
// user data from the api, it acts as the interface between the
// React application and the backend api.

// Included the user service to demonstrate accessing secure api
// endpoints with the http authorization header set after logging
// in to the application, the auth header is set with a JWT token
// in the auth-header.js helper folder. The secure endpoints in
// the example are fake/mock routes implemented in the
// fake-backend.js helper.

//import config from "config";
import { authHeader, handleResponse } from "../components/helpers";

export const userService = {
  getAll,
  getById,
};

function getAll() {
  const requestOptions = { method: "GET", headers: authHeader() };
  const url = "/users"; //`${config.apiUrl}/users`;
  return fetch(url, requestOptions).then(handleResponse);
}

function getById(id) {
  const requestOptions = { method: "GET", headers: authHeader() };
  const url = `/users/${id}`; //`${config.apiUrl}/users`;
  return fetch(url, requestOptions).then(handleResponse);
}
