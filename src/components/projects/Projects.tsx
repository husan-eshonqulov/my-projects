import { Row, Col } from "react-bootstrap";
import Project from "../project/Project";

type ProjectsType = {
  projectsInfo: Array<ProjectType>;
};
export type ProjectType = {
  name: string;
  deployPath: string;
  sourcePath: string;
};

function Projects({projectsInfo}: ProjectsType) {
  let row: JSX.Element[] = [];

  projectsInfo.forEach(({name, deployPath, sourcePath}, id) => {
    row.push(
      <Col className="mb-4" key={id} >
        <Project
          name={name}
          deployPath={deployPath}
          sourcePath={sourcePath}
        />
      </Col>
    );
  });

  return (
    <Row xs={1} md={2} lg={3} data-testid='projects'>
      {row}
    </Row>
  );
}

export default Projects;
