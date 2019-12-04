import React from "react";
// import { Button, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Row, Col, Button } from "reactstrap";
const cvLink =
  "https://docs.google.com/document/d/1D6LuQGVPWXi7Td6rbvHZynqn1PgmLG8R_XthHQ2yGEc/edit?usp=drive_web&ouid=110185671688827546138";
const Hello = ({ refSection }) => {
  return (
    <section id="hello" ref={refSection}>
      <Row>
        <Col md="10">
          <h2 className="section-title">Hi_</h2>
          <p>
            Bachelor in Computer Science and about 6 years of experience in
            software development and web systems. I have also gained valuable
            work with technologies like Java, AngularJS, and Python and also
            gained experience in managing a system. I am Looking for a
            challenging role that utilizes my previous skills and experiences
            and gives me an opportunity to learn more. In a not distant future,
            I want to be an important developer/ manager of a big company with a
            huge knowledge in my area.
          </p>
          <Button color="info" onClick={() => window.open(cvLink, "_black")}>
            Download CV
          </Button>
        </Col>
      </Row>
    </section>
  );
};

export default Hello;
