import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import MapPage from "./pages/MapPage";
import "./styles/main.css"
import Header from "./components/header/header";

function App() {
  
  return (
    <BrowserRouter>
      <Header/>
      <div className="bg-light">
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/map" element={<MapPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
