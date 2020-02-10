import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <div className="row row-content footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-md-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                             <li className="liLink">
                                <NavLink className="nav-link" to='#home'> 
                                    <Link to="home" spy={true} smooth={true} >Home</Link>
                                </NavLink>
                            </li>
                            <li className="liLink">
                                <NavLink className="nav-link" to='#team'> 
                                    <Link to='team' spy={true} smooth={true}>Team</Link>
                                </NavLink>
                            </li>
                            <li className="liLink">
                                <NavLink className="nav-link" to='#history'> 
                                    <Link to='history' spy={true} smooth={true}>History</Link>
                                </NavLink>
                            </li>
                            <li className="liLink">
                                <NavLink className="nav-link" to='#contact'> 
                                    <Link to='contact' spy={true} smooth={true}>Contact Us</Link>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-7 col-md-5">
                        <h5>Our Address</h5>
                        <address>
                            Russia, Perm region<br />
                            Osinkiy raion<br />
                            Selo Gamitsy<br />
                            <i className="fa fa-phone fa-lg"></i>: +7 912 1111111<br />
                            <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:subz05@bk.ru">
                                subz05@bk.ru</a>
                        </address>
                    </div>
                    <div className="col-12 col-md-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                            <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© Copyright 2020 Football Club Gamitsy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;