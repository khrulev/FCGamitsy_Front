import React from 'react';
import {Card, CardBody, CardHeader } from 'reactstrap';

// function Home(props) {
//     return(
//       <div>
        
//         <h4>INFORMATION</h4>
//         <img class="fluid" src='./assets/images/fc_logo1.jpg' alt="" />
//       </div>
//     );
// }


function Home(props) {

  return (
    <div class="container-fluid">
    <div className="row row-content">
      {/* <div className="home-block"> */}
          
              <div className="col-12 col-md-4 offset-md-1">
                  <h2>Our History</h2>
                  <p>Starting in 1996, FC "Gamitsy" quickly gained 
                    popularity among the local boys and girls. Daily training 
                    sessions led to the formation of the main players of the team. 
                    The achievements of the team - prizes in a friendly and on the football games.</p>
              </div>

              <div className="col-12 col-md-4 offset-md-1">
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

              {/* <div className="col-12">
                <br></br>
                  <Card>
                      <CardBody className="bg-faded">
                          <blockquote className="blockquote">
                              <p className="mb-0">You better cut the pizza in four pieces because
                                  I'm not hungry enough to eat six.</p>
                              <footer className="blockquote-footer">Yogi Berra,
                              <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                  P. Pepe, Diversion Books, 2014</cite>
                              </footer>
                          </blockquote>
                      </CardBody>
                  </Card>
              </div> */}
          </div>
      {/* </div> */}
      </div>
  );
}


export default Home;
