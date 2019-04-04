import React from 'react';
import ScoreCell from './ScoreCell';


class PlayerScores extends React.Component {

  handleFieldChange = (index) => (event, value, selectedKey) => {
    let data = [...this.props.scores];

    data[index] = value;

    // If the field after has a number in...
    if (data[index + 1] && parseInt(data[index + 1]) > 0) {
      // Add the changed by amount to the next score as well
    }

    this.props.updateScores(null, data);
  }

  onFieldSubmit = (event) => {
    event.preventDefault();

    // Add new score to previous total
    let data = [...this.props.scores];

    // Add new score to previous total
    data[data.length - 1] = parseInt(data[data.length - 1]) + parseInt(data[data.length - 2]);

    //console.log(data);

    // Add new field for the next score:
    data.push('');
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

    return (
      <form
        className="player-scores"
        onSubmit={this.onFieldSubmit}
      >
        {renderedScores}
        <input type="submit" />
      </form>
    );
  }

}

export default PlayerScores;
