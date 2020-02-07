import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <div>
                <Navbar class="nav-bar" dark expand="md">
                    <div className="container">
                        
                        <NavbarToggler onClick={this.toggleNav} />
                       
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/FC_logo.jpg' height="60" alt='FC Gamitsy ' /></NavbarBrand>
                        
                        <div className="navbar-list">
                        <Collapse  isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink id="navbar_links" className="nav-link"  to='/home'>HOME</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/team'>TEAM</NavLink>
                            </NavItem>                       
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'>ABOUT US</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'>CONTACTS</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                        </div>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Football Club</h1>
                                <p>The pride and winning tradition.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default Header;