import React from 'react';
import ScoresTable from './ScoresTable';


function Player(index, turn) {
  this.name = 'Player' + index;
  this.scores = [];
  this.values = [''];
  this.total = 0;
  this.isTurn = turn || false;
}


class Scores extends React.Component {

  state = {
    playerData: [
      new Player(1, true),
      new Player(2)
    ]
  }

  onFieldChange = (field) => (event, value, selectedKey) => {
    let data = [ ...this.state.playerData ];
    data[field] = value;
    console.log(data);
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
