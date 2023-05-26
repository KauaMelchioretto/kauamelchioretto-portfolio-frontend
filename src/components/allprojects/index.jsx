import { Col, Row, Container, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../cards/projectscard/index";
import projImg1 from "../../assets/img/web-service-disclosure.png";
import projImg2 from "../../assets/img/data-analytics.jpg";
import projImg3 from "../../assets/img/netflix.png";
import voidersLogo from "../../assets/img/VoiderClub_logo.svg";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Voiders Club",
      description: "Voiders Club is a team project focused in NFT market.",
      imgUrl: voidersLogo,
      projectUrl: "https://www.voiders.club/"
    },
    {
      title: "Services disclosure on Web",
      description: "WebHomeService is a personal project created to disclosure and search installments of home services. Database connection inconsistency (Will be fixed soon!) :)",
      imgUrl: projImg1,
      projectUrl:"https://homeservice-ute7.onrender.com",
    },
    {
      title: "Data analytics",
      description: "A data analytics project using Java. ",
      imgUrl: projImg2,
      projectUrl:"https://github.com/KauaMelchioretto/MyAppAcademyChallenge",
    },
    {
      title: "Neflix Clone",
      description: "A Netlix clone using ReactJs ",
      imgUrl: projImg3,
      projectUrl:"https://kauamelchioretto-netflix-clone-react.onrender.com/",
    },
  ];
  
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
          <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Click on project to see more.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Wait for more projects.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Wait for more projects.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
