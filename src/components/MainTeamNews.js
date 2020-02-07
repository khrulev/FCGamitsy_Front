import React, { Component } from 'react';
// import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import logo from '../images/Main.logo.jpg';
// import sample from '../video/bg1.mp4';

class MainTeamNews extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null
    }
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else
      return (
        <div></div>
      );
  }

  render() {
    const menu = this.props.players.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card key={dish.id}
            onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });



    return (

      <div className="container">
      
        <div className="col-12 col-md-5 m-1">
          {/* / <Card width="100%" key="Background" > */}
          

          {/* <CardImg width="500%" src={logo} /> */}
          {/* <CardImgOverlay>
                      <CardTitle></CardTitle>
                  </CardImgOverlay> */}
          {/* </Card> */}
          {/* <video className='videoTag' autoPlay loop muted>
                  <source src={sample} type='video/mp4' />
              </video> */}

        </div>

        <div className="row">



          {/* {menu} */}
        </div>
        {/* <div className="row">
                <div  className="col-12 col-md-5 m-1">
                  {this.renderDish(this.state.selectedDish)}
                </div>
              </div> */}
      </div>
    );
  }
}

export default MainTeamNews;