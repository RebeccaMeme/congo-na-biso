import React from "react";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyForm from "./pages/login";
import "./App.css";
import FormulaireInscription from "./pages/register";
import Suivi from "./pages/suivi";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<MyForm />} />
          <Route path="/register" element={<FormulaireInscription />} />
           <Route path="/suivi" element={<Suivi />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
