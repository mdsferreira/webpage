import React from "react";
import { Row, Col, Container } from "reactstrap";

const Home = props => {
  return (
    <Container>
      <Row>
        <Col md="4" className="profile-avatar">
          <img
            className="avatar-img"
            src={require("./img/avatar.jpeg")}
            alt="Smiley face"
            height="100%"
            width="100%"
          />
        </Col>
        <Col md="8">
          <p className="profile-name">Marcelo Ferreira_</p>
          <p className="profile-work">Full-Stack Developer</p>
          <div>
            <dl>
              <dt>Age:</dt>
              <dd>30</dd>
              <dt>Phone:</dt>
              <dd>
                <a href="tel:+5527999445033">+55 27 999445033</a>
              </dd>
              <dt>Email:</dt>
              <dd>
                <a href="mailto:marcelosife@gmail.com">marcelosife@gmail.com</a>
              </dd>
              <dt>Address:</dt>
              <dd>Vitória, ES, Brazil</dd>
            </dl>
          </div>
          <p className="profile-social">
            <a
              href="https://github.com/mdsferreira"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/marcelosife/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a
              href="https://www.facebook.com/mdsferreira"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-facebook-square"></i>
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
