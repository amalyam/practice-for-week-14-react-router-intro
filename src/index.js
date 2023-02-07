import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Root = () => {
  //click handler function
  const handleClick = () => {
    console.log("Thanks for clicking!");
  };
  return (
    <BrowserRouter>
      <div>
        <Link to="/">App</Link>
        <Link to="/users">Users</Link>
        <Link to="/users/1">Andrew's Profile</Link>
        <Link to="/" onClick={handleClick}>
          App with click handler
        </Link>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/users/:userId">
          <Profile />
        </Route>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
