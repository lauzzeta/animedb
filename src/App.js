import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles";

import "./App.css";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
