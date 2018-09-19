import React from 'react';
import { Navbar, NavbarBrand, NavItem, Nav, NavLink } from 'reactstrap';

const Header = (props) => {
    return (
        <Navbar  className="navbar-custom" expand="md">
            <NavbarBrand href="/">Marcelo</NavbarBrand>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink to="/home/">Home</NavLink>
            </NavItem>
            </Nav>                  
        </Navbar>
    ); 
}

export default Header;

