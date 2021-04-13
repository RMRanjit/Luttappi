// The fake backend enables the example to run without a backend (backend-less),
// it contains a hardcoded collection of users and provides fake implementations
// for the api endpoints "authenticate", "get user by id", and "get all users",
// these would be handled by a real api and database in a production application.

// The "authenticate" endpoint is used for logging in to the application and is
// publicly accessible, the "get user by id" is restricted to authenticated users
// in any role, however regular users can only access their own user record whereas
// admin users can access any user record. The "get all users" endpoint is restricted
// to admin users only.

// The fake backend is implemented by monkey patching the fetch() function to
// intercept certain api requests and mimic the behaviour of a real api. Any
// requests that aren't intercepted get passed through to the real fetch() function.

import { Role } from "./";
import data from "../../dummy_data/data";

export function configureFakeBackend() {
  let users = data.users;
  let realFetch = window.fetch;
  window.fetch = function(url, opts) {
    const authHeader = opts.headers["Authorization"];
    const isLoggedIn =
      authHeader && authHeader.startsWith("Bearer fake-jwt-token");
    const roleString = isLoggedIn && authHeader.split(".")[1];
    const role = roleString ? Role[roleString] : null;

    return new Promise((resolve) => {
      //new Promise((resolve, reject)
      // wrap in timeout to simulate server api call

      setTimeout(() => {
        // authenticate - public
        if (url.endsWith("/users/authenticate") && opts.method === "POST") {
          const params = JSON.parse(opts.body);
          const user = users.find(
            (x) =>
              x.username === params.username && x.password === params.password
          );
          if (!user) return error("Username or password is incorrect");
          return ok({
            id: user.id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            token: `fake-jwt-token.${user.role}`,
          });
        }

        // get user by id - admin or user (user can only access their own record)
        if (url.match(/\/users\/\d+$/) && opts.method === "GET") {
          if (!isLoggedIn) return unauthorised();

          // get id from request url
          let urlParts = url.split("/");
          let id = parseInt(urlParts[urlParts.length - 1]);

          // only allow normal users access to their own record
          const currentUser = users.find((x) => x.role === role);
          if (id !== currentUser.id && role !== Role.Admin)
            return unauthorised();

          const user = users.find((x) => x.id === id);
          return ok(user);
        }

        // get all users - admin only
        if (url.endsWith("/users") && opts.method === "GET") {
          if (role !== Role.Admin) return unauthorised();
          return ok(users);
        }

        // pass through any requests not handled above
        realFetch(url, opts).then((response) => resolve(response));

        // private helper functions

        function ok(body) {
          resolve({
            ok: true,
            text: () => Promise.resolve(JSON.stringify(body)),
          });
        }

        function unauthorised() {
          resolve({
            status: 401,
            text: () =>
              Promise.resolve(JSON.stringify({ message: "Unauthorised" })),
          });
        }

        function error(message) {
          resolve({
            status: 400,
            text: () => Promise.resolve(JSON.stringify({ message })),
          });
        }
      }, 500);
    });
  };
}
