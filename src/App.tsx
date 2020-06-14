import React from "react";
import "./App.css";
import Header from "./components/layouts/Header";
import Dashboard from "./components/dashboard";
function App() {
  return (
    <div>
      <Header username="Padma" />
      <Dashboard />
    </div>
  );
}

export default App;
