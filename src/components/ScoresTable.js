import React from 'react';
import PlayerColumn from './PlayerColumn';


class ScoresTable extends React.Component {

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
      player.values[player.values.length - 2] = player.total;
    }

    // Focus the next cell
    // The "state" for this is in the DOM
    [...document.querySelectorAll('.scores-table__column')].reduce((prev, curr, i) => {
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

  onNameChange = (index) => (text) => {
    let data = [...this.props.playerData];
    data[index].name = text;
    //data[index].values = value;
    //console.log(index);
    //console.log(text);
    this.props.onNameChange(null, data);
  }

  render() {
    const renderedTable = this.props.playerData.map((player, playerIndex) => {
      return (
        <PlayerColumn
          key={playerIndex}
          scores={player.scores}
          values={player.values}
          player={player.name}
          index={playerIndex}
          onFieldChange={this.onFieldChange(playerIndex)}
          onNameChange={this.onNameChange(playerIndex)}
          onSubmit={this.onSubmit(playerIndex)}
        />
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
