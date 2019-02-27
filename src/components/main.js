import React, { Component } from 'react';
import {Container, Col, Row} from 'reactstrap';
import Score from './score.js'

const API = 'https://nhl-score-api.herokuapp.com/api/scores/latest';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
        games: []
    };
  }

  componentWillMount() {
    fetch(API)
    .then((resp) => resp.json()) // Transform the data into json
    .then(json => this.setState({
        games: json.games,
        date: json.date.pretty
    }))

   }

  render() {

    return (
        <Container>
          <Row>
            <Col>
            <h1>
              Showing scores from {this.state.date}
            </h1>
            </Col>
          </Row>
          <Row>
               <Score games={this.state.games} />
          </Row>
        </Container>
    )
            
  }

}

export default Main;