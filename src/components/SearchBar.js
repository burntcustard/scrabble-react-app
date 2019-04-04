import React from 'react';

class SearchBar extends React.Component {

  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  componentDidUpdate() {
    console.log('Inside da box right now: ' + this.state.term);
  }

  onFormSubmit = event => {
    event.preventDefault();
    console.log('Looking up word: ' + this.state.term);
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar">
        <form
          className="search-bar__form"
          onSubmit={this.onFormSubmit}
        >
          <div className="field">
            <label>Scrabble Word Lookup</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }

}

export default SearchBar;
