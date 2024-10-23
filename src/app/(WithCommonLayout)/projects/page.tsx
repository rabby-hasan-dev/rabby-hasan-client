import Container from "@/src/components/UI/Container";
import ProjectCard from "@/src/components/UI/ProjectCard";
import { FeedProjects } from "@/src/services/projects";
import { IProject } from "@/src/types/project.types";


export default async function ProjectsPage() {
  const data = await FeedProjects();

  const projects = data?.data || [];
  if (projects.length === 0) {
    return <div>No projects found.</div>;
  }
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {
          projects.map((project: IProject) => (<ProjectCard key={project._id} project={project} />))
        }
      </div>
    </Container>
  );
}



