import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import Game from "./game";
import Spinner from "./spinner";

const API = "https://nhl-score-api.herokuapp.com/api/scores/latest";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: [],
      date: null
    };
  }

  componentWillMount() {
    fetch(API)
      .then(resp => resp.json()) // Transform the data into json
      .then(json =>
        this.setState(
          {
            games: json.games,
            date: json.date.pretty
          },
          () => console.log(this.state.games)
        )
      );
  }

  render() {
    while (this.state.games.length === 0) {
      return (
        <Container>
          <Row className="loading">
            <Spinner />
          </Row>
        </Container>
      );
    }
    return (
      <section>
        <Container>
          <Row>
            <Col>
              <h2>Showing scores from {this.state.date}</h2>
            </Col>
          </Row>
          <Row>
            {this.state.games.map((game, i) => (
              <Game key={i} game={game} />
            ))}
          </Row>
        </Container>
      </section>
    );
  }
}

export default Main;
