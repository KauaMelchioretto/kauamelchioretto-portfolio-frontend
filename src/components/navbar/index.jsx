import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/img/logo.svg";
import linkedinIcon from "../../assets/img/nav-icon1.svg";
import gitHubIcon from "../../assets/img/github.png";
import wppIcon from "../../assets/img/whatsapp-messenger.png"
import instagramIcon from "../../assets/img/nav-icon3.svg";
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
        if(window.scrollY > 50)
            setScrolled(true);
        else
            setScrolled(false);
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/kau%C3%A3-melchioretto-586929219/" target="_blank">
                  <img src={linkedinIcon} alt="" />
                </a>
                <a id="git-hub-link" href="https://github.com/KauaMelchioretto" target="_blank">
                  <img src={gitHubIcon} alt="" id="git-hub-icon"/>
                </a>
                <a href="https://www.instagram.com/kaua_cmt/" target="_blank">
                  <img src={instagramIcon} alt="" />
                </a>
                <a href='https://api.whatsapp.com/send?phone=5547996191929&text=You%20are%20contacting%20Kau%C3%A3%20Melchioretto%20%3AD' target="_blank">
                  <img src={wppIcon} alt="" />
                </a>
              </div>
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Let's Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
