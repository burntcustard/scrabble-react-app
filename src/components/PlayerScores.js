import React from 'react';
import ScoreCell from './ScoreCell';


class PlayerScores extends React.Component {

  // scoreCellChanged = event => {
  //   //console.log("A player's scores have been changed (scoreCellChanged)");
  //   //console.log(event);
  //   this.props.updateScores({
  //     value: event.value,
  //     cellIndex: event.cellIndex,
  //     playerIndex: this.props.playerIndex
  //   });
  // }
  //
  // scoresSubmitted = event => {
  //   event.preventDefault();
  //   //console.log("A player's scores have been submitted");
  // }

  handleFieldChange = (index) => (event, value, selectedKey) => {
    let data = [...this.props.scores];
    data[index] = value;
    this.props.updateScores(null, data);
  }

  render() {
    var renderedScores = this.props.scores.map((score, index) => {
      //console.log(score.key);
      return (
        <ScoreCell
          key={index}
          value={score}
          scoreCellChanged={this.handleFieldChange(index)}
        />
      );
    });

    renderedScores.push(
      <ScoreCell
        key={renderedScores.length}
        value=''
        scoreCellChanged={this.handleFieldChange(renderedScores.length)}
      />
    );

    return (
      <form
        className="player-scores"
        onSubmit={e => console.log("beep")}
      >
        {renderedScores}
      </form>
    );
  }

}

export default PlayerScores;
