import React from 'react';
import ScoresTable from './ScoresTable';

class Scores extends React.Component {

  state = {
    playerData: []
  }

  render() {
    return(
      <section className="scores">
        <ScoresTable playerData={this.state.playerData}/>
      </section>
    );
  }

}

export default Scores;
