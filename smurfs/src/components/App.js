import React from "react";
import Smurfs from './Smurfs';
import AddSmurf from './AddSmurf';
import "./App.css";


const App = () =>{
  return(
    <div className="app">
      <h1>Welcome to Smurf Village!</h1>
      <div className="mainContent">
        <Smurfs />
        <AddSmurf />
      </div>
    </div>
  );
}

export default App;