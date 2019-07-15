import React from 'react';
import { Container } from 'reactstrap';

const NavBar = ({scrollPosition}) => {
    console.log('scroll', scrollPosition);
    
    const style = scrollPosition ? "menu-wrapper" : "menu-wrapper-top";
    return (
      <div className={style}>
        <Container>
         <nav> 
          <ul>
            <li ><a href="#">Home</a></li>
            <li ><a href="#">Resume</a></li>
            <li ><a href="#">Portifolio</a></li>
            <li ><a href="#">Contact</a></li>
          </ul>
        </nav>
        </Container>
      </div>
    ); 
}

export default NavBar;