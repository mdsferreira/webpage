import React from "react";
import { Container, Card, Row, Col } from "reactstrap";
// import ProjectImages from "./ProjectImages";

const ProjectCard = ({
  projectImage,
  repo,
  description,
  projectName,
  link,
  imageList
}) => {
  // const [showView, setShowView] = React.useState(false);
  return (
    <Container style={{ padding: 0 }}>
      <Card style={{ padding: "10px", borderRadius: 0, borderTop: 0 }}>
        <Row>
          <Col md="4">
            <div
              // onClick={() => setShowView(true)}
              style={{
                backgroundImage: `url(${projectImage})`,
                width: "120px",
                height: "120px",
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat"
              }}
              alt="project-img"
            />
          </Col>
          <Col md="8">
            <Row>
              <Col md="4">
                <b>Name:</b>
              </Col>
              <Col md="8"> {projectName} </Col>
            </Row>
            <Row>
              <Col md="4">
                <b>Git:</b>
              </Col>
              <Col md="8">
                <a href={repo}>{repo} </a>{" "}
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <b>Description:</b>
              </Col>
              <Col md="8"> {description} </Col>
            </Row>
            <Row>
              <Col md="4">
                <b>Link:</b>
              </Col>
              <Col md="8">
                <a href={link}>{link} </a>{" "}
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ProjectCard;
