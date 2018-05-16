import React, { Component } from 'react';
import * as Home from './Home';
import * as Nav from './Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav.Menu />
        <Home.Page />
      </div>
    );
  }
}

export default App;
