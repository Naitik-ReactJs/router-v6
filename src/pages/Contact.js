import React from "react";
import { Container } from "react-bootstrap";
import "../App.css";
import Heading from "../components/Heading";

const Contact = () => {
  return (
    <Container className="my-5 text-center  custom-container">
      <Heading heading="contact " subhead="me" />
      <div className="m-4">
        <div className="contact-info mt-1 d-flex align-items-start flex-column">
          <p className="inquiry-text lead mb-3">
            For any inquiries, please contact us at:
          </p>
          <p className="mb-3">
            Phone : <a href="tel:+1234567890">+91 95456 96969</a>
          </p>
          <p>
            Email :{" "}
            <a href="mailto:naitikb.tagline@gmail.com">
              naitikb.tagline@gmail.com
            </a>
          </p>
        </div>
        <div className="icon custom-letter-spacing custom-line-height lead pt-5 d-flex align-items-center justify-content-center">
          <div className="social-hover pe-4 fs-3">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/naitik_bhavsar17/?igshid=ZDdkNTZiNTM%3D"
            >
              <i className="bi bi-instagram text-custom "></i>
            </a>
          </div>
          <div className="social-hover pe-4 fs-3">
            <a
              href="https://www.instagram.com/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="bi bi-facebook text-primary "></i>
            </a>
          </div>
          <div className="social-hover pe-4 fs-3">
            <a
              href="https://github.com/nikk-creador"
              rel="noreferrer"
              target="_blank"
            >
              <i className="bi bi-github text-dark"></i>
            </a>
          </div>
          <div className="social-hover pe-4 fs-3">
            <a
              href="https://www.linkedin.com/in/naitik-bhavsar-b385051b0/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="bi bi-linkedin text-primary"></i>
            </a>
          </div>
        </div>
        <h4
          style={{ letterSpacing: "0.5rem", lineHeight: "4rem" }}
          data-aos="flip-right"
          data-aos-easing="linear"
          data-aos-delay="500"
          className="text-dark text-uppercase follow"
        >
          Follow{" "}
          <span
            className="fw-bold text-primary"
            style={{ fontFamily: "Bungee Shade" }}
          >
            #naitik
          </span>
        </h4>
      </div>
    </Container>
  );
};

export default Contact;
