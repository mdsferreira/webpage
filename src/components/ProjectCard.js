import React from 'react';
import { Container, Card, Row, Col } from 'reactstrap';

const ProjectCard = (props) => {
    return (
        <Container>
           <Card> 
               <Row>
                   <Col md="4">
                        <img  src="http://previews.aspirity.com/spirit/assets/img/img_project_3_mono.png" alt="project-img"/>
                   </Col>
                   <Col md="8">
                   
                   </Col>
               </Row>
           </Card>                   
        </Container>
    ); 
}

export default ProjectCard;

