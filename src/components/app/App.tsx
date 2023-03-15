import './App.css';
import Projects from '../projects/Projects';
import { Container } from 'react-bootstrap';
import data from '../../data';
import { Row, Col } from 'react-bootstrap';
import { IoLogoGithub } from 'react-icons/io';
import { IoLogoLinkedin } from 'react-icons/io';
import { RiTelegramFill } from 'react-icons/ri';
import { BsFillPersonFill } from 'react-icons/bs';

function App() {
  let profileImg;

  try {
    profileImg = require('../../profileImage/profileImg.png').default;
  } catch (err) {
    console.log(err);
    profileImg = <BsFillPersonFill />;
  }

  return (
    <Container>
      <div className="mt-3">
        <div className="d-flex flex-column align-items-center">
          {makeProfileImg(profileImg)}
          <h1 className="mt-1 mb-3 profile-name">{data[0][0]}</h1>
          <Row className="mb-5">
            <Col className="sm-icon">
              <a
                href={data[0][1]}
                target="_blank"
                rel="noreferrer"
                className="social-media"
              >
                <IoLogoLinkedin size="74px" color="#0e76a8" />
              </a>
            </Col>
            <Col className="sm-icon">
              <a
                href={data[0][2]}
                target="_balnk"
                rel="noreferrer"
                className="social-media"
              >
                <IoLogoGithub size="70px" color="#333" />
              </a>
            </Col>
            <Col className="sm-icon">
              <a
                href={data[0][3]}
                target="_blank"
                rel="noreferrer"
                className="social-media"
              >
                <RiTelegramFill size="73px" color="#0088cc" />
              </a>
            </Col>
          </Row>
        </div>
      </div>
      <div className="mt-3">
        {data[1].map((projects) => (
          <Projects {...projects} />
        ))}
      </div>
      <div className="d-flex justify-content-center mt-3 mb-3">
        <h5>
          &copy; from{' '}
          <a href="https://it-forward.github.io/" target="_balnk">
            Pay IT Forward
          </a>
        </h5>
      </div>
    </Container>
  );
}

function makeProfileImg(img: string | JSX.Element) {
  if (typeof img === 'string') {
    return (
      <img src={img} alt="profile" className="profile-img rounded-circle" />
    );
  } else {
    return (
      <div className="profile-img rounded-circle d-flex justify-content-center align-items-center">
        <BsFillPersonFill size="170px" color="#555" />
      </div>
    );
  }
}

export default App;
