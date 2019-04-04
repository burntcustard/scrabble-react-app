import React, { Component } from 'react';
import './App.css';
import Words from './Words';
import Scores from './Scores';


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="ui-container">
          <div className="ui">
            <Words />
            <Scores />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
