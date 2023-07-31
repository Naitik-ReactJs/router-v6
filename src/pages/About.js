import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Heading from "../components/Heading";
import "../App.css";

const About = () => {
  return (
    <Container className="my-5 text-center custom-container">
      <Row>
        <Col className="m-4 text-center">
          <Heading heading="About " subhead="me" />
        </Col>
      </Row>
      <Row>
        <Col
          md
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <img src="" className="img-fluid w-50" alt="My profile pic" />
        </Col>
        <Col md>
          <Row>
            <Col>
              <h2 className="lead fs-1">Front-End Developer</h2>
            </Col>
          </Row>
          <Row>
            <Col md>
              <p className="p-5">
                I'm <span className="fw-bold">Naitik Bhavsar</span> passionate
                about cutting-edge technologies and creating visually stunning
                interfaces. I believe in the power of exceptional user
                experiences and I strive to make every interface I create both
                beautiful and intuitive. I'm always up for a challenge and eager
                to push the boundaries of what's possible.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Button
                variant="outline-secondary"
                className="btn btn-outline-secondary text-dark p-3"
              >
                <a
                  href="upload pdf here"
                  download=""
                  className="text-dark nav-link"
                >
                  Download Resume
                </a>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
