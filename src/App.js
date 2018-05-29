import React, { Component } from 'react';
import * as Landing from './Landing';
import * as Nav from './Nav';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Nav.Menu />
          <Landing.Card>
            <h4>Hello</h4>
            <Landing.Form />
          </Landing.Card>
        </div>
      </Provider>
    );
  }
}

export default App;
