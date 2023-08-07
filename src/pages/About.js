import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "../components/Heading";
import "../App.css";
import profile from "../img/animation.gif";
const About = () => {
  return (
    <Container style={{ background: "white" }} className="custom-container ">
      <Row>
        <Col className="m-4">
          <Heading heading="About " subhead="me" />
        </Col>
      </Row>
      <Row>
        <Col
          md={6}
          className="d-flex flex-column align-items-center justify-content-center mb-5 img-container"
        >
          <img
            style={{ maxWidth: "80%" }}
            src={profile}
            className="img img-fluid d-none d-md-block"
            alt="My profile pic"
          />
        </Col>
        <Col>
          <Row>
            <Col>
              <p
                style={{ lineHeight: "1.8rem", letterSpacing: "0.1rem" }}
                className="p-5 align-items-start"
              >
                I'm{" "}
                <h3 style={{ fontFamily: "Bungee Shade" }}>Naitik Bhavsar</h3>{" "}
                <h3 style={{ fontFamily: "Bungee Shade" }}>
                  Front-End Developer
                </h3>{" "}
                passionate about cutting-edge technologies and creating visually
                stunning interfaces. I believe in the power of exceptional user
                experiences and I strive to make every interface I create both
                beautiful and intuitive. I'm always up for a challenge and eager
                to push the boundaries of what's possible.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <button
                variant="outline-secondary"
                className="btn btn-outline-secondary p-3 mb-3"
              >
                <a
                  href="upload pdf here"
                  download=""
                  className="text-dark nav-link"
                >
                  Download Resume
                </a>
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
