import React, { Component } from 'react';
import './App.css';
import { Row, Col, Container } from 'reactstrap';
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Hello from "./components/Hello"
import Footer from "./components/Footer"
import Resume from "./components/Resume"
import Projects from "./components/Projects"

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      scrollPos: 0

    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }
  
  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
  
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
  
    const scrolled = winScroll / height
  
    this.setState({
      scrollPos: scrolled,
    })
    console.log(scrolled)
  }

  render() {
    const { scrollPos } = this.state;
    return (
      <div className="App">
        <div className="menu">
        <NavBar scrollPosition={scrollPos}/>
        </div>
        <Row >
            <Col>            
              <Row className="profile-body">
                <Col>
                  <Home />
                </Col>
              </Row>
              <Row>
                <Col className="body-site">
                  <Container>
                    <Hello />  
                    <hr/>
                    <Resume />
                    <hr/>
                    <Projects />
                    <hr />
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
