import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Team extends Component {

  constructor(props) {
    super(props);

    // this.state = {
    //   selectedPlayer: null
    // }
  }

  // onDishSelect(player) {
  //   this.setState({ selectedPlayer: player });
  // }

  // renderDish(player) {
  //   if (player != null)
  //     return (
  //       <Card>
  //         <CardImg top src={player.image} alt={player.name} />
  //         <CardBody>
  //           <CardTitle>{player.name}</CardTitle>
  //           <CardText>{player.amplua}</CardText>
  //         </CardBody>
  //       </Card>
  //     );
  //   else
  //     return (
  //       <div></div>
  //     );
  // }

  render() {
    const allTeam = this.props.players.map((player) => {
      return (
        <div className="col-12 col-md-3 m-1">
          <Card 
            key={player.id}
            // onClick={() => this.onDishSelect(player)}
            >
            <CardImg width="100%" src={player.image} alt={player.name} />
            <CardImgOverlay>
              <CardTitle>{player.name}</CardTitle>
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