import { Row, Col } from 'react-bootstrap';
import Project from '../project/Project';

export type ProjectsType = {
  projectsTitle: String | null;
  projectsInfo: Array<ProjectType>;
};

export type ProjectType = {
  name: string;
  deployPath: string;
  sourcePath: string;
};

function Projects({ projectsTitle, projectsInfo }: ProjectsType) {
  let row: JSX.Element[] = [];

  projectsInfo.forEach(({ name, deployPath, sourcePath }, id) => {
    row.push(
      <Col className="mb-4" key={id}>
        <Project name={name} deployPath={deployPath} sourcePath={sourcePath} />
      </Col>
    );
  });

  return (
    <div>
      <h4 className="my-5 text-center">{projectsTitle}</h4>
      <Row xs={1} md={2} lg={3} data-testid="projects">
        {row}
      </Row>
    </div>
  );
}

export default Projects;
