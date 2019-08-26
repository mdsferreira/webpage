import React from "react";
import { Container } from "reactstrap";

const NavBar = ({ scrollPosition, onClick }) => {
  const style = scrollPosition ? "menu-wrapper" : "menu-wrapper-top";
  return (
    <div className={style}>
      <Container>
        <nav>
          <ul>
            <li onClick={() => onClick("refHello")}>
              <span>Home</span>
            </li>
            <li>
              <span onClick={() => onClick("refResume")}>Resume</span>
            </li>
            <li>
              <span onClick={() => onClick("refPortifolio")}>Portifolio</span>
            </li>
            <li>
              <span onClick={() => onClick("refContact")}>Contact</span>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default NavBar;
