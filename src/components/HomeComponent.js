import React from 'react';
import { Card, CardBody, CardHeader, CardImg } from 'reactstrap';
import YouTube from 'react-youtube';

class IntroYoutube extends React.Component {
    render() {
        const opts = {
            height: '340',
            width: '440',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0
            }
        };

        return (
            <YouTube
                videoId="TWlh_p06Tbc"
                opts={opts}
                onReady={this._onReady}
            />
        );
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}

function Home() {
    return (
        <div>
            <div class="container-fluid">
                <div className="row row-content description-bottom">
                    <div className="col-12 col-md-4 offset-md-1">
                        <h2>Our History</h2>
                        <p>Starting in 1996, FC "Gamitsy" quickly gained
                          popularity among the local boys and girls. Daily training
                          sessions led to the formation of the main players of the team.
                            The achievements of the team - prizes in a friendly and on the football games.</p>
                    </div>
                    <div className="col-12 col-md-5 offset-md-1">
                        <Card>
                            <CardHeader id="CardStatistic" className="text-white">Facts At a Glance</CardHeader>
                            <CardBody>
                                <dl className="row p-1">
                                    <dt className="col-6">Started</dt>
                                    <dd className="col-6">1996 year</dd>
                                    <dt className="col-6">Format of games</dt>
                                    <dd className="col-6">5x5, 11x11</dd>
                                </dl>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="row description-top">
                    <div className="col-12 col-md-4 offset-md-1">
                        <Card className="tactical">
                            <CardImg width="100%" src='assets/images/tactical.jpg' />
                            <CardBody className="bg-faded">
                                <blockquote className="blockquote">
                                    <p className="mb-0">You were born to be a player. You were meant to be here. This moment is yours.</p>
                                    <footer className="blockquote-footer">Herb Brooks</footer>
                                </blockquote>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="d-sm-none d-lg-block col-12 col-md-4 offset-md-1">
                        <IntroYoutube className="d-sm-none d-lg-block" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
