import React, { Component } from "react";
import "./App.css";

import Toolbar from "./Components/Toolbar/Toolbar";
import Cover from "./Components/Cover/Cover";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar className="Toolbar" />
        <Cover />
      </div>
    );
  }
}

export default App;
