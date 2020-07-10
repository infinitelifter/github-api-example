import React from "react";
import "./App.scss";
import Main from "./routes";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App-container">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
