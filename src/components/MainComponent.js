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

import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom'

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            players: PLAYERS
        };
    }

    render() {

        const HomePage = () => {
            return ( <Home />);
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/Team' component={() => <MainTeamNews players={this.state.players} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
                
                {/* <MainTeamNews players={this.state.players} /> */}
                
            </div>
        );
    }
}

export default Main;