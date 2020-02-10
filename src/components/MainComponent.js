import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Team from './TeamComponent';
import Contact from './ContactComponent';
import { PLAYERS } from '../shared/players';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            players: PLAYERS
        };
    }

    render() {
        return (
            <div>
                <Header />
                <Team players={this.state.players} />
                <Home />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default Main;