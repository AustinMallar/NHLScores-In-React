import React from 'react'


function Game(props) {

const homeTeam = props.game.teams.home;
const awayTeam = props.game.teams.away;
const scores = props.game.scores;

  return (
    <div>
      
         Home: { homeTeam } &nbsp; {scores[homeTeam]}  &nbsp; 
         Away: { awayTeam }  &nbsp; {scores[awayTeam]}  &nbsp;

          { props.game.status.state } 

       
          
      
    </div>
  )
}
export default Game

