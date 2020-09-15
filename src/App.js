import React from "react";
import "./App.css";
import Input from "./components/Input";
import { DBConfig } from "./DBconfig";
import { initDB } from "react-indexed-db";
import Panel from "./components/Panel";
import ShowAll from "./components/Panel";

initDB(DBConfig);

function App() {
  return (
    <div className="App">
      <ShowAll />
      <Input />
    </div>
  );
}

export default App;
