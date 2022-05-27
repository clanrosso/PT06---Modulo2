import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Route path="/filter/posts" />
      <Route path="/" />
      <Route path="/users/:id/posts" />
      <Route path="/user/:userid/post/:id/coments" />
    </React.Fragment>
  );
}

export default App;
