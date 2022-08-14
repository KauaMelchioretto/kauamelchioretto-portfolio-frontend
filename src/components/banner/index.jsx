import { useState, useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import headderImg from "../../assets/img/header-img.svg";
import myPhoto from "../../assets/img/me.jpg";
import "animate.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(1);
  const [text, setText] = useState("");
  const [activeLink, setActiveLink] = useState("home");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [
    "Kauã Melchioretto",
    "From Brazil",
    "Developer",
    "Looking for the Full Stack",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Wecolme to my Portfolio</span>
                  <h1>
                    {`Hi i'm `}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Kauã Melchioretto","From Brazil", "Developer", "Looking for the Full Stack", ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Hi, my name is Kauã Melchioreto i'm 18 years old and i'm
                    graduated in the technical course in informatics integrated
                    to high school at Instituto Federal de Santa Catarina -
                    Campus Gaspar. I have a great passion for the area of
                    programming and I am increasingly in search of knowledge.
                    The sky is the only limit here.
                  </p>

                  <Nav.Link
                    href="#connect"
                    className={
                      activeLink === "connect"
                        ? "active navbar-link"
                        : "navbar-link"
                    }
                    onClick={() => onUpdateActiveLink("#connect")}
                  >
                    <button>
                      <strong>Let's Connect</strong>{" "}
                      <ArrowRightCircle size={25}></ArrowRightCircle>
                    </button>
                  </Nav.Link>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  clasName={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img id="my-photo" src={myPhoto} alt="Kauã Melchioretto" />
                  <img id="astronaut" src={headderImg} alt="Headder Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
