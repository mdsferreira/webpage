import React from "react";
import {
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";
import ProjectCard from "./ProjectCard";
import classnames from "classnames";

function Projects({ refSection }) {
  const [activeTab, toggleTab] = React.useState("1");
  return (
    <section id="projects" ref={refSection}>
      <Row>
        <Col md="10">
          <h2 className="section-title">Projects_</h2>
          <div>
            <Nav tabs>
              <NavItem>
                <NavLink
                  onClick={() => toggleTab("1")}
                  className={classnames({
                    active: activeTab === "1"
                  })}
                >
                  Segaf
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={() => toggleTab("2")}
                  className={classnames({
                    active: activeTab === "2"
                  })}
                >
                  PES
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={() => toggleTab("3")}
                  className={classnames({
                    active: activeTab === "3"
                  })}
                >
                  Wine App
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <ProjectCard
                  projectImage={require("./img/segaf_defensor.JPG")}
                  repo="http://bitbucket.org/marcelosife/segaf/"
                  description="Management system of activities of the Public Defense of Espírito Santo. Used for design control and submission of acts for control and payment of bonuses."
                  projectName="Segaf"
                  link="http://www.defensoria.es.def.br/sigaf/login"
                  imageList={[
                    { src: require("./img/segaf_defensor.JPG") },
                    { src: require("./img/segaf_gabinete.JPG") }
                  ]}
                />
              </TabPane>
              <TabPane tabId="2">
                <ProjectCard
                  projectImage={require("./img/pes_dashbord.JPG")}
                  repo="https://bitbucket.org/marcelosife/extrajudicialsaude2/"
                  description="System to extrajudicial information from the public health sector using Python and ReactJS."
                  projectName="PES"
                  link="http://www.defensoria.es.def.br/pes/login"
                  imageList={[{ src: require("./img/pes_dashbord.JPG") }]}
                />
              </TabPane>
              <TabPane tabId="3">
                <ProjectCard
                  projectImage="https://lh3.googleusercontent.com/jB9wi7DTxyAnuW4MWRjBdPKBXA2RPwNZ4qmdg2TbrVk22hp3AP44Ai5zgke5dWekmd6N=w1078-h908-rw"
                  repo="private"
                  description="One of the biggest e-commerce of wine in Brazil."
                  projectName="Wine app"
                  link="https://play.google.com/store/apps/details?id=br.com.wine.app"
                  imageList={[
                    {
                      src:
                        "https://lh3.googleusercontent.com/jB9wi7DTxyAnuW4MWRjBdPKBXA2RPwNZ4qmdg2TbrVk22hp3AP44Ai5zgke5dWekmd6N=w1078-h908-rw",
                      width: 4,
                      height: 3
                    },
                    {
                      src:
                        "https://lh3.googleusercontent.com/zDPdV2t_Kj3GXrJ1xuGun9EzPoiIWgHFAR_qeIAYsvHJZWyxsqAMbixvA7ehcM81gMc=w1837-h906-rw",
                      width: 1,
                      height: 1
                    },
                    {
                      src:
                        "https://lh3.googleusercontent.com/BajcmzNqgV6RmfMJ72E_9JithcXBUt5pNQDTnEk-AGzkgpNdpYsRLpTmJzR8lQlufBA=w1837-h906-rw",
                      width: 1,
                      height: 1
                    }
                  ]}
                />
              </TabPane>
            </TabContent>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default Projects;
