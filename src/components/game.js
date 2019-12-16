import React from "react";
import PropTypes from "prop-types";

import { Card, CardBody, Row, Col, Badge } from "reactstrap";
import TeamLogo from "./team-logo";

const Game = props => {
  const homeTeam = props.game.teams.home.abbreviation;
  const awayTeam = props.game.teams.away.abbreviation;
  const status = props.game.status.state;
  const scores = props.game.scores;

  const homeWinner = scores[homeTeam] > scores[awayTeam];
  const awayWinner = scores[homeTeam] < scores[awayTeam];

  return (
    <Col sm="3">
      <Card className="game-card">
        <div className="game-card__status">
          <Badge color="danger">{status}</Badge>
        </div>
        <CardBody className="game-card__body">
          <Row>
            <Col className="team-logo__container" xs="2">
              <TeamLogo teamName={homeTeam}></TeamLogo>
            </Col>
            <Col xs="8" className="game-card__team-col">
              <h3 className="game-card__team">{homeTeam}</h3>
            </Col>
            <Col xs="2" className="game-card__score-col">
              <h4
                className={
                  homeWinner ? "game-card__score winner" : "game-card__score"
                }
              >
                {scores[homeTeam]}
              </h4>
            </Col>
          </Row>
          <Row>
            <Col className="team-logo__container" xs="2">
              <TeamLogo teamName={awayTeam}></TeamLogo>
            </Col>
            <Col xs="8" className="game-card__team-col">
              <h3 className="game-card__team">{awayTeam}</h3>
            </Col>
            <Col xs="2" className="game-card__score-col">
              <h4
                className={
                  awayWinner ? "game-card__score winner" : "game-card__score"
                }
              >
                {scores[awayTeam]}
              </h4>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

Game.propTypes = {
  game: PropTypes.object.isRequired
};

export default Game;
