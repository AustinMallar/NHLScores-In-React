import React, { Component } from 'react';
import Score from './score.js'

const API = 'https://nhl-score-api.herokuapp.com/api/scores/latest';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
        games: []
    };
  }

  componentDidMount() {
    fetch(API)
    .then((resp) => resp.json()) // Transform the data into json
    .then(json => this.setState({
        games: json.games,
        date: json.date.pretty
    }))

   }

  render() {

    return (
        <div>
          <Score games={this.state.games} date={this.state.date}/>
        </div>
    )
            
  }

}

export default Main;