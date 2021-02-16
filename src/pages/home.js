import React from "react";
import { Container, Col, Row } from "reactstrap";
import Game from "../components/Game";

const Home = (props) => {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <h2>Showing scores from {props.date}</h2>
          </Col>
        </Row>
        <Row>
          {props.games.map((game, key) => (
            <Game key={key} game={game} index={key} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Home;
