import React, { Component } from 'react';
import './App.css';
import Words from './Words';
import Scores from './Scores';


class App extends Component {

  render() {
    return (
      <div className="app">
        <Words />
        <Scores />
      </div>
    );
  }

}

export default App;
