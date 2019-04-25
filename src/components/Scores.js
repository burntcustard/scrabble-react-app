import React from 'react';
import ScoresTable from './ScoresTable';
import './Scores.css';


function Player(index) {
  this.name = 'Player ' + index;
  this.scores = [];
  this.values = [''];
  this.totalScore = () => this.scores.reduce((acc, curr) => acc + curr, 0);
}


class Scores extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playerData: [],
      noOfPlayers: 2,
      turn: 0
    };

    for (let i = 1; i <= this.state.noOfPlayers; i++) {
      this.state.playerData.push(new Player(i));
    }
  }

  onChange = () => (data) => {
    this.setState({ playerData: data });
  }

  scoreSubmit = (field) => (event, updatedPlayerData, selectedKey) => {
    //console.log(updatedPlayerData)
    let data = { ...this.state.playerData };
    data[field] = updatedPlayerData;

    // Figure out whos go it is
    //data.playerData.forEach

    //console.log(data[field]);

    this.setState({ data });
    //console.log(this.state);
  }

  render() {
    //console.log(this.state);
    return(
      <section className="scores">
        <ScoresTable
          playerData={this.state.playerData}
          onChange={this.onChange()}
          onSubmit={this.scoreSubmit('playerData')}
        />
      </section>
    );
  }

}

export default Scores;
