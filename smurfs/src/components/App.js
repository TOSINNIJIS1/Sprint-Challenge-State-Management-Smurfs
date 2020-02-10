import React, { useState, useEffect } from "react";
import "./App.css";
import SmurfContext, { smurfsContext } from "../contexts/context";
import Form from '../components/form'

import Map from './mapping'



function App() {

  const [smurf, setSmurf] = useState([])

  const Smurfs = event => {
    setSmurf([...smurf, event])
  };


  useEffect(() => {

    fetch(`http://localhost:3333/smurfs`)
    .then(res => res.json())
    .then(res => setSmurf(res))

  })

  return(
    
    <smurfsContext.Provider value={{Smurfs, smurf}}>
      <div className="App">
        <div className="App-header">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        </div>
        <Map />
        <Form />
    </div>
    </smurfsContext.Provider>
  )
}



export default App