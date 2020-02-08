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

const SliderSet = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                img={item.src}
                className="custom-tag drk"
                tag="div"
                key={item.id}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <div class="overlay">
                    <img class="fluid" src={item.src} alt={item.altText} />
                </div>
                <CarouselCaption captionText={item.captionText} captionHeader={item.captionHeader} />
            </CarouselItem>
        );
    });

    return (
        // <div>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel> 
        // </div>
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
            <div>
            {/* <div className="row"> */}
                {/* <div className="col-6 col-md-6"> */}
                <Navbar class="nav-bar" dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='./assets/images/fc_logo1.jpg' height="30" alt='FC Gamitsy' /></NavbarBrand>

                        <div className="navbar-list">
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink id="navbar_links" className="nav-link" to='/home'>HOME</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to='/team'>TEAM</NavLink>
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
                {/* </div> */}
             {/* </div> */}
            {/* //  <div className="row"> */}

                {/* <div className="col-6 col-md-6"> */}
                <SliderSet />
                {/* </div> */}
            {/* </div> */}
            </div>
        );
    }
}

export default Header;