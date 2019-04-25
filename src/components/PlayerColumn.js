import React from 'react';
import InputPlayerName from './InputPlayerName';
import InputScore from './InputScore';


class PlayerColumn extends React.Component {

  onValueChange = (index) => (value, selectedKey) => {
    let data = [...this.props.values];
    data[index] = value;
    this.props.onValueChange(null, data);
  }

  onSubmit = (event) => {
    event.preventDefault();

    // What to do here...

    // a) Just call a special thing in scoresTable?
    // b) check if new value is appropriate and then call thing? Y

    let values = [...this.props.values];
    let newValue = values[values.length - 1];

    // Don't actually do anything, there's nothing in da box
    if (newValue === "") {
      console.warn('Tried to submit a score but da box was empty');
      return false;
    }

    // Value is a number or one of the allowed special chars
    // if (isNaN(newValue) && newValue !== '.' && newValue !== '-') {
    //
    // }

    // Add da new value in as a score
    if (!isNaN(newValue)) {
      newValue = Number(newValue);
      this.props.onSubmit(newValue);
    }

    // Add new field for the next score:
    let data = [...this.props.values];
    data.push('');
    this.props.onValueChange(null, data);

  }

  render() {
    var renderedScores = this.props.values.map((value, index) => {
      return (
        <InputScore
          key={index}
          value={value}
          onChange={this.onValueChange(index)}
          player={this.props.player}
          index={index}
        />
      );
    });

    return (
      <div className="player-column">
        <InputPlayerName
          player={this.props.player}
          index={this.props.index}
          onChange={(text) => this.props.onNameChange(text)}
        />
        <form
          className="player-scores"
          onSubmit={this.onSubmit}
        >
          {renderedScores}
          <input type="submit" tabIndex="-1" />
        </form>
      </div>
    );
  }

}

export default PlayerColumn;
