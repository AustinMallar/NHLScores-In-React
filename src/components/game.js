import React from 'react'
import {Col} from 'reactstrap'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';



function Game(props) {

const homeTeam = props.game.teams.home;
const awayTeam = props.game.teams.away;
const status = props.game.status.state;
const scores = props.game.scores;

  return (
    <Col sm="4">
    <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>{homeTeam} vs {awayTeam}</CardTitle>
          <CardSubtitle>{status}</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </Col>
  )
}
export default Game

