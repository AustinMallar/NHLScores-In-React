import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row } from "reactstrap";
import Header from "./Header";
import Home from "../pages/home";
import SingleGame from "../pages/single-game";
import Spinner from "./Spinner";

const API = "https://nhl-score-api.herokuapp.com/api/scores/latest";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: [],
      date: null,
    };
  }

  componentWillMount() {
    fetch(API)
      .then((resp) => resp.json())
      .then((json) =>
        this.setState({
          ...this.state,
          games: json.games,
          date: json.date.pretty,
        })
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
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/game/:id">
              <SingleGame games={this.state.games} />
            </Route>
            <Route exact path="/">
              <Home games={this.state.games} date={this.state.date} />;
            </Route>
          </Switch>
        </main>
      </Router>
    );
  }
}

export default Main;
