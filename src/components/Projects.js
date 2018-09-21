import React from 'react';
// import { Button, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import ProjectCard from "./ProjectCard"

const Projects = (props) => {
    return (
        <section id="projects" > 
        <Row>
          <Col md="10">
            <h2 className="section-title">Projects_</h2>
            <div>
                <Nav tabs>
                <NavItem>
                    <NavLink>
                    Tab1
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                    Moar Tabs
                    </NavLink>
                </NavItem>
                </Nav>
                <TabContent activeTab={true}>
                <TabPane tabId="1">
                  <ProjectCard />   
                    <Row>
                    <Col sm="12">
                      
                    </Col>
                    </Row>
                </TabPane>                
                </TabContent>
            </div>
                     
          </Col>
        </Row>
      </section>
    ); 
}

export default Projects;