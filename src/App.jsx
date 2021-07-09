import React from "react";
import "./App.less";
import { MainLayout } from "./pages/MainLayout/index.jsx";
const App = () => (
  <div className="App">
    <MainLayout className="animate__animated animate__pulse" />
  </div>
);
export default App;
