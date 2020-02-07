import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
// import Menu from './MenuComponent';
// import DishDetail from './DishdetailComponent';
// import { DISHES } from '../shared/dishes';

import logo from '../images/FC_logo.jpg';
import MainTeamNews from './MainTeamNews';
import { PLAYERS } from '../shared/players';

import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        players: PLAYERS,
        selectedDish: null
    };
  }

//   onDishSelect(dishId) {
//     this.setState({ selectedDish: dishId});
//   }

  render() {
    return (
      <div>
        <Header />
        {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} /> */}
        {/* <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
        <MainTeamNews players={this.state.players} />
        <Footer />
      </div>
    );
  }
}

export default Main;