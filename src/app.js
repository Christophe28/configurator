import React from "react";
import { Routes, Route } from "react-router-dom";
import Wizzard from "./pages/wizzard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Wizzard />} />
    </Routes>
  );
};

export default App;
