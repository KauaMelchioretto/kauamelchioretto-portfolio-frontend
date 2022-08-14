import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg";
import axios from "axios";

export const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const changeValues = (value) => {
    setFormDetails((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const clearValues = () => {
    setFormDetails({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const validation = () => {
    var message = "";
    if (formDetails.firstName == "") {
      message += "Insert your first name!\n";
    }
    if (formDetails.lastName == "") {
      message += "Insert your last name!\n";
    }
    if (formDetails.email == "") {
      message += "Insert your email address!\n";
    }
    if (message != "") {
      window.alert(message);
      return false;
    }
    return true;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (validation()) {
      let result = null;
      setButtonText("Sending...");
      await axios.post("http://localhost:3001/contact", {
          name: `${formDetails.firstName} ${formDetails.lastName}`,
          email: formDetails.email,
          message: formDetails.message,
          phone: formDetails.phone,
        })
        .then((response) => {
          result = response.data;
          console.log(response);
        });

      setButtonText("Send");
      clearValues();

      if (result.code === 200) {
        setStatus({ success: true, message: "Message sent successfully" });
      } else {
        setStatus({
          success: false,
          message: "Something went wrong, please try again later.",
        });
      }
    }
  };

  return (
    <div className="grid-bg">
      <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img src={contactImg} alt="Contact us" />
            </Col>
            <Col md={6}>
              <h2>Contact me</h2>
              <p>Here you can sending me a email</p>

              <form onSubmit={handleSubmit}>
                <Row>
                  <Col sm={6} className="px-1">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      onChange={changeValues}
                      value={formDetails.firstName}
                      placeholder="First name"
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      onChange={changeValues}
                      value={formDetails.lastName}
                      placeholder="Last name"
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={changeValues}
                      value={formDetails.email}
                      placeholder="Email"
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      onChange={changeValues}
                      value={formDetails.phone}
                      placeholder="Phone"
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <textarea
                      id="message"
                      name="message"
                      row="6"
                      onChange={changeValues}
                      value={formDetails.message}
                      placeholder="Message"
                    ></textarea>
                    <button type="submit">
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                  {status.message && (
                    <Col>
                      <p
                        className={
                          status.success === false ? "denger" : "success"
                        }
                      >
                        {status.message}
                      </p>
                    </Col>
                  )}
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
