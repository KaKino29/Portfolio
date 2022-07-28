import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Routes/Home";
import Intro from "./Routes/Intro";
import Tech from "./Routes/Tech";
import WishList from "./Routes/WishList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tech" element={<Tech />} />
        <Route path="/Intro" element={<Intro />} />
        <Route path="/WishList" element={<WishList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
