import React from 'react';
import SearchBar from './SearchBar';
import WordList from './WordList';
import wordLookup from '../api/wordLookup';
import './Words.css';


class Words extends React.Component {

  state = {
    words: []
  };

  onTermSubmit = async term => {

    // TODO: Correct URL & params
    const response = await wordLookup.get(term);

    console.log(response);

    this.setState({
      words: response.data.words // TODO: Correct return stuff
    })
  }

  render() {
    return(
      <section className="words">
        <SearchBar onSubmit={this.onTermSubmit} />
        <WordList words={this.state.words} />
      </section>
    );
  }

}

export default Words;
