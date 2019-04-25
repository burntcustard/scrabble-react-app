import React from 'react';
import PlayerColumn from './PlayerColumn';


class ScoresTable extends React.Component {

  onSubmit = (index) => () => {

    let playerData = [...this.props.playerData];
    let player = playerData[index];

    // Compare the current values, to an older set of values, starting at ze bottom

    for (let i = player.values.length - 1; i >= 0; i--) {
      if (player.values[i] !== player.valuesOld[i]) {

        // New value been added
        if (i === player.values.length - 1) {
          player.scores.push(Number(player.values[i]));
          player.values[i] = player.totalScore();
        }

        // Value has been edited!
        // ...
      }
    }


    player.valuesOld = player.values;
    this.props.onChange(playerData);


    // The player was adding a new score
    // if (player.values.length > player.scores.length) {
    //
    //   player.scores.push(newValue);
    //
    //   player.values[player.values.length - 1] = player.totalScore();
    // }



    // Update the values
    //player.values = values;

    // Update the scores
    //player.scores.push(newScore);
    //player.total += newScore;

    // Update the values
    // if (player.values[player.values.length - 2] === '.') {
    //   player.values[player.values.length - 2] = '•';
    // } else {
    //   player.values[player.values.length - 2] = player.total;
    // }

    // Focus the next cell
    // The "state" for this is in the DOM
    // [...document.querySelectorAll('.scores-table__column')].reduce((prev, curr, i) => {
    //   var inputs = curr.querySelectorAll('.score-cell');
    //   if (inputs.length >= prev) {
    //     inputs[inputs.length - 1].focus();
    //     return inputs.length;
    //   }
    //   return prev;
    // }, 0);


  }

  onValueChange = (index) => (event, value, selectedKey) => {
    let data = [...this.props.playerData];
    data[index].values = value;
    this.props.onChange(data);
  }

  onNameChange = (index) => (text) => {
    let data = [...this.props.playerData];
    data[index].name = text;
    this.props.onChange(data);
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
          onValueChange={this.onValueChange(playerIndex)}
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
