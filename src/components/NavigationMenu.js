import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem } from 'mdbreact';
import '../index.css'


class NavigationMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    handleClick = (event) => {
        let elmnt = event.target.name ? document.getElementById(event.target.name) : document.getElementById("navbar")
        if (elmnt) {
            elmnt.scrollIntoView({ behavior: 'smooth' });
        }
    }
    render() {
        return (
            <header id="navbar">
                <Navbar color="indigo" dark expand="md" fixed="top" scrolling>
                    <NavbarBrand>
                        <strong name="navbar" style={{ fontSize: "31px", fontFamily: "Chela One, sans-serif" }} onClick={(event) => { this.handleClick(event) }}>Maitri Mahal</strong>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.onClick} />
                    <Collapse isOpen={this.state.collapse} navbar>
                        <NavbarNav left>
                            <NavItem>
                                <button className="z-depth-0 navigation-btn" name="services" onClick={(event) => { this.handleClick(event) }}>Services</button>
                            </NavItem>
                            <NavItem>
                                <button className="z-depth-0 navigation-btn" name="gallery" onClick={(event) => { this.handleClick(event) }}>Gallery</button>
                            </NavItem>
                            <NavItem>
                                <button className="z-depth-0 navigation-btn" name="team" onClick={(event) => { this.handleClick(event) }}>Team</button>
                            </NavItem>
                            <NavItem>
                                <button className="z-depth-0 navigation-btn" name="reviews" onClick={(event) => { this.handleClick(event) }}>Reviews</button>
                            </NavItem>
                            <NavItem>
                                <button className="z-depth-0 navigation-btn" name="contact" onClick={(event) => { this.handleClick(event) }}>Contact Us</button>
                            </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                            
                                <a className="fb-ic" href="https://www.facebook.com/Maitri-Mahal-1829595080503588/">
                                    <i className="fa fa-facebook fa-lg white-text mr-md-4"> </i>
                                </a>
                            
                            
                                <a className="ins-ic" href="https://www.instagram.com/maitrimahalgkp/">
                                    <i className="fa fa-instagram fa-lg white-text mr-md-4"> </i>
                                </a>
                            
                            
                                <a href="https://maitri-mahal.business.site/" >
                                    <i className="fa fa-google fa-lg white-text mr-md-4"></i>
                                </a>
                            
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </header>
        );
    }
}
export default NavigationMenu;