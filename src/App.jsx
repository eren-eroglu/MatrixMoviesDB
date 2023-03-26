import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Movies from "./Movies";
import SingleMovie from "./SingleMovie";

function App() {
  return (
    <Routes>
      <Route path="/MatrixMoviesDB" element={<Home/>} />
      <Route path="/movies" element={<Movies/>} />
      <Route path="/movies/:id" element={<SingleMovie/>} />
    </Routes>
  );
}

export default App;
