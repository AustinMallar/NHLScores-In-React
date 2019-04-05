import React from 'react'
import {Col} from 'reactstrap'
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';


function Game(props) {

const homeTeam = props.game.teams.home;
const awayTeam = props.game.teams.away;
const status = props.game.status.state;
const scores = props.game.scores;

  return (
    <Col sm="4">
    <Card className="game-card">
        <CardBody>
        <CardSubtitle className="game-status">{status}</CardSubtitle>
          <CardTitle className="scores">{homeTeam} {scores[`${homeTeam}`]} - {awayTeam} {scores[`${awayTeam}`]}</CardTitle>
        </CardBody>
      </Card>
    </Col>
  )
}
export default Game

