import React from "react";
import { Button, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";

const Footer = ({ refSection }) => {
  return (
    <section id="contacs" ref={refSection}>
      <Row>
        <Col md="10">
          <h2 className="section-title">Contact_</h2>
          <div className="footer">
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Name</Label>
                <Input type="name" name="name" id="name" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="email" />
              </FormGroup>
              <FormGroup>
                <Label for="text">Mensage</Label>
                <Input type="textarea" name="text" id="mensage" />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Footer;
