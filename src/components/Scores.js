import React from 'react';
import ScoresTable from './ScoresTable';


function Player(index) {
  this.name = 'Player' + index;
  this.scores = [];
  this.values = [''];
  this.total = 0;
}


class Scores extends React.Component {

  state = {
    playerData: [
      new Player(1),
      new Player(2)
    ]
  }

  onFieldChange = (field) => (event, value, selectedKey) => {
    //console.log(this.state);
    let data = { ...this.state.data };
    data[field] = value;
    this.setState({ data });
  }

  scoreSubmit = (field) => (event, value, selectedKey) => {
    let data = { ...this.state.data };
    data[field] = value;
    this.setState({ data });
  }

  render() {
    //console.log(this.state);
    return(
      <section className="scores">
        <ScoresTable
          playerData={this.state.playerData}
          onFieldChange={this.onFieldChange('playerData')}
          scoreSubmit={this.scoreSubmit('playerData')}
        />
      </section>
    );
  }

}

export default Scores;
