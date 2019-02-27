import React, { Component } from 'react'
import Game from './game';


export default class score extends Component {

  render() {

    return (
      <React.Fragment>
        {this.props.games.map((game,i) => <Game key={i} game={game}/>)}
      </React.Fragment>
    )
  }
}
