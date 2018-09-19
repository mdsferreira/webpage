import React, { Component } from 'react';
import './App.css';
import { Row, Col, Container } from 'reactstrap';
import Header from "./components/Header"
import Home from "./components/Home"
import Hello from "./components/Hello"
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row >
            <Col>            
              <Row>
                <Col >
                  <Header />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Home />
                </Col>
              </Row>
              <Row>
                <Col className="body-site">
                  <Container>
                    <Hello />  
                    <hr/>
                    <Footer />
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
