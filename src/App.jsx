import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Movies from "./Movies";
import SingleMovie from "./SingleMovie";

function App() {
  return (
    <Switch>
      <Route exact path="/MatrixMoviesDB" component={Home} />
      <Route exact path="/movies" component={Movies} />
      <Route exact path="/movies/:id" component={SingleMovie} />
    </Switch>
  );
}

export default App;
