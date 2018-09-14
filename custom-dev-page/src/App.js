import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import {
  Row, 
  Col,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem, Container
} from 'reactstrap';
import Home from "./components/Home"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Row >
            <Col>            
              <Row>
                <Col >
                  <Navbar  className="navbar-custom" expand="md">
                    <NavbarBrand href="/">Marcelo</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                      <NavItem>
                        <NavLink to="/home/">Home</NavLink>
                      </NavItem>
                    </Nav>                  
                  </Navbar>
                </Col>
              </Row>
              <Row>
                <Col className="body-site">
                  <Container>
                    <Router >
                      <Switch>                    
                        <Route exact path="/" component={Home} />                           
                      </Switch>
                    </Router>
                  </Container>
                </Col>
              </Row>
            </Col>
          </Row>
      </div>
    );
  }
}

export default App;
