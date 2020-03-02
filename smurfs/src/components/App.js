import React from 'react'
import Mapping from "./mapping"

import './App.css'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <div className="App-header">
        <h1> Welcome </h1>

        <Mapping />
        </div>
      </div>
    )
  }
}

export default App