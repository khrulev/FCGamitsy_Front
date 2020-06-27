import React, { Component, useState } from 'react';
import {
    Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem,
    Carousel, 
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
// import $ from 'jquery';
// import slick from '../scripts/slick.min';
import Slider from "react-slick";
// @import "~slick-carousel/slick/slick.css";
// @import "~slick-carousel/slick/slick-theme.css";

const items = [
    {
        id: 1,
        altText: 'The Best',
        captionHeader: 'FC GAMITSY',
        captionText: 'welcome',
        src: './assets/images/slide1.jpg'
    },
    {
        id: 2,
        altText: 'One team',
        captionHeader: 'PLAY',
        captionText: 'FOOTBAL',
        src: './assets/images/slide2.jpg'
    },
    {
        id: 3,
        altText: "It's just",
        captionHeader: "It's just",
        captionText: 'A game',
        src: './assets/images/slide3.jpg'
    }
];

const SliderSet = () => {
    // const [activeIndex, setActiveIndex] = useState(0);
    // const [animating, setAnimating] = useState(false);

    // const next = () => {
    //     if (animating) return;
    //     const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    //     setActiveIndex(nextIndex);
    // }

    // const previous = () => {
    //     if (animating) return;
    //     const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    //     setActiveIndex(nextIndex);
    // }

    // const goToIndex = (newIndex) => {
    //     if (animating) return;
    //     setActiveIndex(newIndex);
    // }

    const slides = items.map((item) => {
        return (
            // <CarouselItem
            //     img={item.src}
            //     className="custom-tag drk"
            //     tag="div"
            //     key={item.id}
            //     onExiting={() => setAnimating(true)}
            //     onExited={() => setAnimating(false)}
            // >
                <div class="slider__overlay"> 
                     {/* // <img class="fluid" src={item.src} alt={item.altText} /> */}
                    <div className="slider__item">
                        <img  src={item.src} alt={item.altText} />
                        {/* <div className="h3">{item.captionHeader}</div>
                        <div className="regular">{item.captionText}</div> */}
                    </div>
                </div>
                // <CarouselCaption captionText={item.captionText} captionHeader={item.captionHeader} />
            // </CarouselItem>
        );
    });

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        appendDots: dots => (
            <div>
              <ul style={{ 
                  margin: "0 10px", 
                  display: "flex", 
                  'list-style-type': "none",
                  'z-index': "99" }}> 
                  {dots} 
                </ul>
            </div>
          ),
          variableWidth: false
    };
               
    return (
        <div className="slider">
            <Slider {...settings}>
                {slides}
            </Slider>
            <div className="slider__scrollDown">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

            // <Carousel
            //     activeIndex={activeIndex}
            //     next={next}
            //     previous={previous}
            // >
            //     <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            //     {slides}
            //     <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            //     <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            // </Carousel>
            
    );
}

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
        return (
            <div name="home" >
                <Navbar id="navi" class="nav-bar" dark expand="md">
                    <div id="navbar__navi" className="container">
                        <NavbarBrand className="mr-auto" href="/">
                            <div class="navbar__logo1">
                                <img className="logo1__img" src='./assets/images/fc_logo1.jpg' height="45" alt='FC Gamitsy' />
                            </div>    
                        </NavbarBrand>
                        <div className="navbar-list">
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        {/* <NavLink id="navbar_links" className="nav-link" to='#home'>HOME</NavLink> */}
                                        <NavLink className="nav-link" to='#home'> 
                                            <Link to="home" spy={true} smooth={true}>HOME</Link>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        {/* <NavLink className="nav-link" to='#team'>TEAM</NavLink> */}
                                        <NavLink className="nav-link" to='#team'> 
                                            <Link to="team" spy={true} smooth={true}>TEAM</Link>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        {/* <NavLink className="nav-link" to='#history'>HISTORY</NavLink> */}
                                        <NavLink className="nav-link" to='#history'> 
                                            <Link to="history" spy={true} smooth={true}>HISTORY</Link>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        {/* <NavLink className="nav-link" to='#contact'>CONTACTS</NavLink> */}
                                        <NavLink className="nav-link" to='#contact'> 
                                            <Link to="contact" spy={true} smooth={true}>CONTACTS</Link>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </div>
                        <NavbarToggler onClick={this.toggleNav} />
                    </div>
                </Navbar>
                <SliderSet />
            </div>
        );
    }
}

export default Header;