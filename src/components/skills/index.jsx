import htmlIcon from "../../assets/img/html5-logo.png";
import cssIcon from "../../assets/img/css-logo.jpg";
import jsIcon from "../../assets/img/js-logo.png";
import reactIcon from "../../assets/img/React-icon.png";
import nodeIcon from "../../assets/img/nodejs-icon.png";
import mySql from "../../assets/img/my-sql.png";
import cSharpIcon from "../../assets/img/csharp-icon.svg";
import javaIcon from "../../assets/img/java-icon.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../../assets/img/color-sharp.png"
import { Col, Container, Row } from "react-bootstrap";

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>
                                All technologies I currently have knowledge of.
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img className="skills-icons" src={htmlIcon} alt="Image" />
                                    <h5>HTML5</h5>
                                </div>
                                <div className="item">
                                    <img className="skills-icons" src={cssIcon} alt="Image" />
                                    <h5>CSS3</h5>
                                </div>
                                <div className="item">
                                    <img className="skills-icons" src={jsIcon} alt="Image" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img className="skills-icons" src={reactIcon} alt="Image" />
                                    <h5>ReactJs</h5>
                                </div>
                                <div className="item">
                                    <img className="skills-icons" src={nodeIcon} alt="Image" />
                                    <h5>NodeJs</h5>
                                </div>
                                <div className="item">
                                    <img className="skills-icons" src={mySql} alt="Image" />
                                    <h5>MySql</h5>
                                </div>
                                <div className="item">
                                    <img className="skills-icons" src={cSharpIcon} alt="Image" />
                                    <h5>C#</h5>
                                </div>
                                <div className="item">
                                    <img className="skills-icons" src={javaIcon} alt="Image" />
                                    <h5>Java</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    );
} 