import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Team from './TeamComponent';
import Contact from './ContactComponent';

//import { PLAYERS } from '../shared/players';
// import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    players: state.players
  }
}

class Main extends Component {

    constructor(props) {
        super(props);
        // this.state = { //changed on Redux
        //     players: PLAYERS
        // };
    }

    render() {
        return (
            <div>
                <Header />
                <Team players={this.props.players} />               
                <Home />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default (connect(mapStateToProps)(Main));