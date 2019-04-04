import React from 'react';
import PlayerScores from './PlayerScores';


class ScoresTable extends React.Component {

  updateScores = (index) => (event, value, selectedKey) => {
    //console.log(value);
    let data = [...this.props.playerData];
    data[index].scores = value;
    this.props.scoreChange(null, data);
  }

  render() {
    const renderedTable = this.props.playerData.map((player, pIndex) => {
      return (
        <div className="column" key={pIndex}>
          <div className="playerName">{player.name}</div>
          <PlayerScores
            key={player.key}
            scores={player.scores}
            updateScores={this.updateScores(pIndex)}
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
