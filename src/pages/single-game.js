import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";

const SingleGame = props => {
  let { id } = useParams();
  const game = props.games[id];
  const homeTeam = game.teams.home.abbreviation;
  const awayTeam = game.teams.away.abbreviation;

  return (
    <section>
      <Container>
        <Row>
          <Col>
            <h1 className="teams-playing">
              {homeTeam} vs {awayTeam}
            </h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SingleGame;
