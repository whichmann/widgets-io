import React from "react";
import "./App.css";
import NavWidget from "./Components/NavWidget";
import Widgets from "./Components/Widgets";
import DashContextProvider from "./contexts/DashContext"

function App() {
  return (
    <DashContextProvider>
      <div className="App">
        <Widgets></Widgets>
        <NavWidget></NavWidget>
      </div>
    </DashContextProvider>
  );
}

export default App;
