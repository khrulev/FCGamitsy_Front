import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { Loading } from "./LoadingComponent";

class Team extends Component {

  constructor(props) {
    super(props);
  }

  render() {  
    const allTeam = this.props.players.map((player) => {
      return (
        <div className="col-12 col-md-4 foto-teams">
          <Card key={player.id}>
            <CardImg className="ramka"  src={player.image} alt={player.name} />
            <CardImgOverlay>
              {/* <CardTitle>{player.name}</CardTitle> width="100%"*/}
            </CardImgOverlay>
          </Card>
        </div>
      )
    })

    if (this.props.isLoading) {
      return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      )
    } else return (
      <div name="team" className="container">
        <div className="row">
          <div className="col-12">
            <h2 id="TeamHeader">Our Team</h2>
          </div>
        </div>
        <div className="row justify-content-between">
          {allTeam}
        </div>
      </div>
    );
  }
}

export default Team;