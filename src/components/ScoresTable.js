import React from 'react';
import PlayerScores from './PlayerScores';


class ScoresTable extends React.Component {

  // onScoreChange = (index) => (event, value, selectedKey) => {
  //   //console.log(value);
  //   let data = [...this.props.playerData];
  //
  //   data[index].values = value;
  //   this.props.onScoreChange(null, data);
  //
  //   let data = [...this.props.playerData];
  //   data[index].values = value;
  //   this.props.onFieldChange(null, data);
  // }

  onSubmit = (index) => (event, value, selectedKey) => {
    let data = [...this.props.playerData];
    
    this.props.onSubmit(null, data);
  }

  onFieldChange = (index) => (event, value, selectedKey) => {
    //console.log(value);
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
