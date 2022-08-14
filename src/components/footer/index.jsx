import { Container, Col, Row } from "react-bootstrap";
import logo from "../../assets/img/logo.svg";
import linkedinIcon from "../../assets/img/nav-icon1.svg";
import gitHubIcon from "../../assets/img/github.png";
import wppIcon from "../../assets/img/whatsapp-messenger.png"
import instagramIcon from "../../assets/img/nav-icon3.svg";

export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col id="footer-items" sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col id="footer-items" sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/kau%C3%A3-melchioretto-586929219/" target="_blank"><img src={linkedinIcon} /></a>
                            <a id="git-hub-link" href="https://github.com/KauaMelchioretto" target="_blank"><img src={gitHubIcon} /></a>
                            <a href="https://www.instagram.com/kaua_cmt/" target="_blank"><img src={instagramIcon} /></a>
                            <a href='https://api.whatsapp.com/send?phone=5547996191929&text=You%20are%20contacting%20Kau%C3%A3%20Melchioretto%20%3AD' target="_blank">
                  <img src={wppIcon} alt="" />
                </a>
                        </div>
                        <p>Copyright 2022. All right reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}