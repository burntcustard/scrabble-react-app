import React from 'react';
import './ScoreCell.css';


class ScoreCell extends React.Component {

  onChange = (e) => {
    // TODO: Cell contents validation 'ere?
    this.props.onFieldChange(
      null, // event
      e.target.value // contents of the cell (a string)
    );
  }

  render() {
    return (
      <input
        className="score-cell"
        type="tel"
        value={this.props.value}
        onChange={this.onChange}
      />
    )
  }

}

export default ScoreCell;
