import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Team from './TeamComponent';
import Contact from './ContactComponent';
import { connect } from 'react-redux';
import { addComment, fetchPlayers } from '../redux/ActionCreators';

const mapDispatchToProps = dispatch => ({
    addComment: (author, comment) => dispatch(addComment(author, comment)),
    fetchPlayers: () => {dispatch(fetchPlayers())}
  });

const mapStateToProps = state => {
  return {
    players: state.players,
    comments: state.comments
  }
}

class Main extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
      this.props.fetchPlayers();
    }

    render() {
        return (
            <div>
                <Header />
                <Team players={this.props.players.players}
                    isLoading={this.props.players.isLoading}
                    errMess={this.props.players.errMess} 
                />               
                <Home />
                <Contact comments={this.props.comments}
                        addComment={this.props.addComment} />
                <Footer />
            </div>
        );
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(Main));