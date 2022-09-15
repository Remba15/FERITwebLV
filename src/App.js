import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./components/Routes";
import Header from "./components/header/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Routing />
    </BrowserRouter>
  );
}

export default App;
