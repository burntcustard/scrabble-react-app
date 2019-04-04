import React from 'react';


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
        className="scores"
        type="number"
        value={this.props.value}
        onChange={this.onChange}
      />
    )
  }

}

export default ScoreCell;
