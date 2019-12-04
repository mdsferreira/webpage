import React from "react";
import { Row, Col, Progress } from "reactstrap";
import { Timeline, Event } from "react-timeline-scribble";

const Resume = ({ refSection }) => {
  return (
    <section id="hello" ref={refSection}>
      <Row>
        <Col md="10" className="resume-body">
          <h2 className="section-title">Resume_</h2>

          <h3 className="resume-list-title">Educations</h3>
          <Timeline>
            <Event
              interval={"2008 – 2014"}
              title={"Universidade Federal do Espírito Santo"}
              subtitle={"Bachelor's degree, Computer Science"}
            ></Event>
            <Event
              interval={"2008 – 2009"}
              title={"Instituto Federal do Espírito Santo"}
              subtitle={"Bachelor of Technology, Informatics"}
            ></Event>
          </Timeline>
          <h3 className="resume-list-title">employment</h3>
          <Timeline>
            <Event
              interval={"06/2018 – *"}
              title={"Globalsys Soluções em TI"}
              subtitle={"Mobile Developer"}
            >
              - Outsourced in @wine.com.br - Analise the app's quality "wine
              app" - Test planning and test ui developer
            </Event>
            <Event
              interval={"02/2018 – 05/2019"}
              title={"Defensoria Pública do Espírito Santo"}
              subtitle={"Team leard Fullstack Developer"}
            >
              Leading a small team of two developers and two interns. Working on
              a few projects that basically deal with the daily public lawyer
              work. Technologies: React and Django.
            </Event>
            <Event
              interval={"12/2017 – 01/2018"}
              title={"MindTec"}
              subtitle={"Full-Stack Developer"}
            >
              1. Programming: PHP, CodeIgniter 3 2. Web services (REST) 3.
              Methodologies: Scrum 4. Frontend Technologies: HTML, CSS,
              Bootstrap 5. Frontend Components: jQuery 2.x , AngularJS
            </Event>
            <Event
              interval={"02/2017 – 02/2018"}
              title={"Container Solutions"}
              subtitle={"Full-Stack Developer"}
            >
              - Container Solutions is a company focus on developing products
              for several Ports in Brazil. Helping them to manage their workers.
              My responsibilities were creating new features and maintain the
              existing projects. Skills Summary: 1. Programming: PHP,
              CodeIgniter 3, ScriptCase 2. Web services (REST) 3. Methodologies:
              Scrum 4. Frontend Technologies: HTML, CSS, Bootstrap 5. Frontend
              Components: jQuery 2.x , AngularJS
            </Event>
            <Event
              interval={"01/2015 – 12/2015"}
              title={"Conexos Consultoria e Sistemas Ltda"}
              subtitle={"Full-Stack Developer"}
            >
              In the market for almost two decades, CONEXOS is a Brazilian
              company which develops integrated software aimed at business
              management to foreign trade areas, wholesale distribution and
              service providers. My responsibilities were to build the entire
              page so Back-End as Front-End, developing company's web product
              "Conexos-ERP".
            </Event>
            <Event
              interval={"01/2015 – 12/2014"}
              title={"Ministério Público do Trabalho"}
              subtitle={"Intern"}
            >
              web developer PHP, HTML, CSS and JavaScript.
            </Event>
          </Timeline>
          <h3 className="resume-list-title">general skills</h3>
          <Row>
            <Col>
              <Row>
                <Col md="2">Python</Col>
                <Col className="text-center" md="8">
                  90%
                </Col>
              </Row>
              <Progress color="info" value="90" />
              <Row>
                <Col md="2">PHP</Col>
                <Col className="text-center" md="8">
                  50%
                </Col>
              </Row>
              <Progress color="info" value="50" />
              <Row>
                <Col md="2">Java</Col>
                <Col className="text-center" md="8">
                  20%
                </Col>
              </Row>
              <Progress color="info" value="20" />
            </Col>
            <Col>
              <Row>
                <Col md="2">JavaScript</Col>
                <Col className="text-center" md="8">
                  90%
                </Col>
              </Row>
              <Progress color="info" value="90" />
              <Row>
                <Col md="2">React</Col>
                <Col className="text-center" md="8">
                  70%
                </Col>
              </Row>
              <Progress color="info" value="70" />
              <Row>
                <Col md="2">AngularJS</Col>
                <Col className="text-center" md="8">
                  50%
                </Col>
              </Row>
              <Progress color="info" value="50" />
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Resume;
