import React, { Component } from 'react';
import * as Landing from './Landing';
import * as Nav from './Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav.Menu />
        <Landing.Card>
          <Landing.Form />
        </Landing.Card>
      </div>
    );
  }
}

export default App;
