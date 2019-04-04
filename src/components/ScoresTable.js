import React from 'react';
import PlayerScores from './PlayerScores';
import './ScoresTable.css';


class ScoresTable extends React.Component {

  onScoreChange = (index) => (event, value, selectedKey) => {
  //   //console.log(value);
  //   let data = [...this.props.playerData];
  //
  //   data[index].values = value;
  //   this.props.onScoreChange(null, data);
  //
  //   let data = [...this.props.playerData];
  //   data[index].values = value;
  //   this.props.onFieldChange(null, data);
  }

  onSubmit = (index) => (event, values, newScore) => {
    let playerData = [...this.props.playerData];
    let player = playerData[index];

    // Update the values
    player.values = values;

    // Update the scores
    player.scores.push(newScore);
    player.total += newScore;

    // Update the values
    if (player.values[player.values.length - 2] === '.') {
      player.values[player.values.length - 2] = '•';
    } else {
      //console.log(player.values[player.values.length - 2]);
      player.values[player.values.length - 2] = player.total;
    }

    // Focus the next cell
    [...document.querySelectorAll('.scores-table > .column')]
                .reduce((prev, curr, i) => {
      var inputs = curr.querySelectorAll('.score-cell');
      if (inputs.length >= prev) {
        inputs[inputs.length - 1].focus();
        return inputs.length;
      }
      return prev;
    }, 0);

    this.props.onSubmit(null, playerData);
  }

  onFieldChange = (index) => (event, value, selectedKey) => {
    let data = [...this.props.playerData];
    data[index].values = value;
    this.props.onFieldChange(null, data);
  }

  render() {
    const renderedTable = this.props.playerData.map((player, pIndex) => {
      return (
        <div className="column" key={pIndex}>
          <div className="playerName">{player.name}</div>
          <PlayerScores
            key={player.key}
            scores={player.scores}
            values={player.values}
            onScoreChange={this.onScoreChange(pIndex)}
            onFieldChange={this.onFieldChange(pIndex)}
            onSubmit={this.onSubmit(pIndex)}
          />
        </div>
      );
    });

    return (
      <div className="scores-table">
        {renderedTable}
      </div>
    );
  }

}

export default ScoresTable;
