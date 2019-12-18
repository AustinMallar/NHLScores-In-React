import React from "react";
import teamInfo from "../helpers/team-info";
import TeamLogo from "../helpers/team-logo";
import { Container, Row, Col, Table } from "reactstrap";
import { useParams } from "react-router-dom";

const SingleGame = props => {
  let { id } = useParams();
  const game = props.games[id];
  const scores = game.scores;
  const homeTeam = game.teams.home.abbreviation;
  const awayTeam = game.teams.away.abbreviation;
  const status = game.status.state;

  const homeTeamGoals = game.goals.filter(game => game.team === homeTeam);
  const awayTeamGoals = game.goals.filter(game => game.team === awayTeam);

  const homeTeamInfo = teamInfo[homeTeam];
  const awayTeamInfo = teamInfo[awayTeam];

  return (
    <section>
      <Container>
        <Row>
          <Col>
            <h1 className="teams-playing">
              <TeamLogo teamName={homeTeam} />
              {homeTeamInfo.name} VS <TeamLogo teamName={awayTeam} />
              {awayTeamInfo.name}
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table className="score-table">
              <thead>
                <tr>
                  <th>{status}</th>
                  <th></th>
                  <th>2</th>
                  <th>3</th>
                  {scores.overtime ? <th>OT</th> : ""}
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{homeTeamInfo.name}</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  {scores.overtime ? <td>OT</td> : ""}
                  <td>{scores[homeTeam]}</td>
                </tr>
                <tr>
                  <th scope="row">{awayTeamInfo.name}</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  {scores.overtime ? <td>OT</td> : ""}
                  <td>{scores[awayTeam]}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SingleGame;
