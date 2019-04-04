import React from 'react';
import ScoresTable from './ScoresTable';

class Scores extends React.Component {

  state = {
    playerData: [
      {
        name: 'Player 1',
        scores: [8, 16],
        savedScores: [8, 16]
      },
      {
        name: 'Player 2',
        scores: [4, 6],
        savedScores: [4, 6]
      }
    ]
  }

  scoreChange = (field) => (event, value, selectedKey) => {
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
    return(
      <section className="scores">
        <ScoresTable
          playerData={this.state.playerData}
          scoreChange={this.scoreChange('playerData')}
          scoreSubmit={this.scoreSubmit('playerData')}
        />
      </section>
    );
  }

}

export default Scores;
