import Projects from "../projects/Projects";
import { Container } from "react-bootstrap";
import data from '../../data';

function App() {
  return (
    <Container>
      <div>
        <Projects projectsInfo={data} />
      </div>
    </Container>
  );
}

export default App;
