import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Team extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const allTeam = this.props.players.map((player) => {
      return (
        <div className="col-12 col-md-3 m-1">
          <Card key={player.id}>
            <CardImg className="ramka"  src={player.image} alt={player.name} />
            <CardImgOverlay>
              {/* <CardTitle>{player.name}</CardTitle> width="100%"*/}
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 id="TeamHeader">Our Team</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          {allTeam}
        </div>
      </div>
    );
  }
}

export default Team;