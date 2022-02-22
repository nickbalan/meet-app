import React from "react";
import "./WelcomeScreen.css";
import { Container, Row, Col } from "react-bootstrap";

function WelcomeScreen(props) {
  return props.showWelcomeScreen ? (
    <Container>
      <Row>
        <Col>
          <div className="WelcomeScreen">
            <h1 className="header">Welcome to the Meet App</h1>
            <h4>
              Log in to see upcoming events around the world for full-stack
              developers
            </h4>
            <div className="button_cont" align="center">
              <div className="google-btn">
                <div className="google-icon-wrapper">
                  <img
                    className="google-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="Google sign-in"
                  />
                </div>
                <button
                  onClick={() => {
                    props.getAccessToken();
                  }}
                  rel="nofollow noopener"
                  class="btn-text"
                >
                  <b>Sign in with google</b>
                </button>
              </div>
            </div>
            <a
              href="https://nickbalan.github.io/meetup-app/privacy.html"
              rel="nofollow noopener"
            >
              Privacy policy
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  ) : null;
}

export default WelcomeScreen;