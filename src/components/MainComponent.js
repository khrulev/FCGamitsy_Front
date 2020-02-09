import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Team from './TeamComponent';
import { PLAYERS } from '../shared/players';
// import DishDetail from './DishdetailComponent';
// import { Switch, Route, Redirect } from 'react-router-dom'

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
                {/* <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/Team' component={() => <MainTeamNews players={this.state.players} />} />
                    <Redirect to="/home" />
                </Switch> */}
                <Team players={this.state.players} />
                <Home />
                <Footer />
                
                {/* <MainTeamNews players={this.state.players} /> */}
                
            </div>
        );
    }
}

export default Main;