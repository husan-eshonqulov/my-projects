import "./App.css";
import Projects from "../projects/Projects";
import { Container } from "react-bootstrap";
import data from "../../data";
import profileImg from "../../profileImage/profileImg.jpg";
import { Row, Col } from "react-bootstrap";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { RiTelegramFill} from 'react-icons/ri';

function App() {
  return (
    <Container>
      <div className="mt-3">
        <div className="d-flex flex-column align-items-center">
          <img
            src={profileImg}
            alt="profile"
            className="profile-img rounded-circle"
          />
          <h1 className="mt-1 mb-3 profile-name">{data[0][0]}</h1>
          <Row className="mb-5">
            <Col>
              <a href={data[0][1]} target="_blank" rel="noreferrer" className="social-media">
                <IoLogoLinkedin size="74px" color="#0e76a8" />
              </a>
            </Col>
            <Col>
              <a href={data[0][2]} target="_balnk" rel="noreferrer" className="social-media">
                <IoLogoGithub size="70px" color="#333" />
              </a>
            </Col>
            <Col>
              <a href={data[0][3]} target="_blank" rel="noreferrer" className="social-media">
                <RiTelegramFill size="73px" color="#0088cc" />
              </a>
            </Col>
          </Row>
        </div>
      </div>
      <div className="mt-3">
        <Projects projectsInfo={data[1]} />
      </div>
      <div className="d-flex justify-content-center mt-3 mb-3">
        <h5>&copy; from <a href="https://it-forward.github.io/" target="_balnk">Pay IT Forward</a></h5>
      </div>
    </Container>
  );
}

export default App;
