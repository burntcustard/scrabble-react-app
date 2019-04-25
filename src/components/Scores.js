import React from 'react';
import ScoresTable from './ScoresTable';


function Player(index) {
  this.name = 'Player' + index;
  this.scores = [];
  this.totalScore = () => this.scores.reduce((acc, curr) => acc + curr, 0);
  this.values = [''];
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

  onFieldChange = (field) => (event, value, selectedKey) => {
    let data = [ ...this.state.playerData ];
    data[field] = value;
    //console.log(data);
    this.setState({ data });
    //console.log(this.state);
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
          onFieldChange={this.onFieldChange('playerData')}
          onSubmit={this.scoreSubmit('playerData')}
        />
      </section>
    );
  }

}

export default Scores;
