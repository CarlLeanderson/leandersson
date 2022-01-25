import projectsData from "../data/projects-data";
import Project from "../views/project";

const ProjectController = () => {
  return projectsData.map((x) => <Project key={x.id} props={x} />);
};

export default ProjectController;
