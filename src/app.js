import React from "react";
import { Routes, Route } from "react-router-dom";
import Configurator from "./pages/configurator";
import Wizzard from "./pages/wizzard";

const app = () => {
  return (
    <Routes>
      <Route path="/" element={<Wizzard />} />
      <Route exact to path="/configurateur" element={<Configurator />} />
    </Routes>
  );
};

export default app;
