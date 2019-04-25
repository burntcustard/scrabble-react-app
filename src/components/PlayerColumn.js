import React from 'react';
import InputPlayerName from './InputPlayerName';
import InputScore from './InputScore';


class PlayerColumn extends React.Component {

  onValueChange = (index) => (value, selectedKey) => {
    let data = [...this.props.values];

    data[index] = value;
    //
    // // If the field after has a number in...
    // if (data[index + 1] && parseInt(data[index + 1]) > 0) {
    //   // Add the changed by amount to the next score as well
    // }
    //console.log(this.props.values);
    //console.log(index);
    //console.log(event);
    //console.log(value);
    //console.log(data);

    this.props.onValueChange(null, data);
  }

  onSubmit = (event) => {
    event.preventDefault();

    // What to do here...

    // a) Just call a special thing in scoresTable?
    // b) check if new value is appropriate and then call thing? Y

    let values = [...this.props.values];
    let newValue = values[values.length - 1];

    if (newValue === '.') {
      values.push('');
      this.props.onSubmit(null, values, 0);
    }

    if (!isNaN(newValue)) {
      let newScore = parseInt(newValue);
      values.push('');
      this.props.onSubmit(null, values, newScore);
    }

    // Add new field for the next score:
    // data.push('');
    // this.props.updateScores(null, data);
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
      <form
        className="player-column"
        onSubmit={this.onSubmit}
      >
        <InputPlayerName
          player={this.props.player}
          index={this.props.index}
          onChange={(text) => this.props.onNameChange(text)}
        />
        {renderedScores}
        <input type="submit" />
      </form>
    );
  }

}

export default PlayerColumn;
