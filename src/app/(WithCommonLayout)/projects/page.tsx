import { SearchIcon } from "@/src/assets/icons";
import Container from "@/src/components/UI/Container";
import HeadingComponent from "@/src/components/UI/HeadingComponent";
import ProjectCard from "@/src/components/UI/ProjectCard";
import { FeedProjects } from "@/src/services/projects";
import { IProject } from "@/src/types/project.types";
import { Input } from "@nextui-org/input";
import { Pagination } from "@nextui-org/pagination";



const animals = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "elephant", label: "Elephant" },


];

export default async function ProjectsPage() {
  const data = await FeedProjects();

  const projects = data?.data || [];
  if (projects.length === 0) {
    return <div>No projects found.</div>;


  }



  return (
    <Container>
      <div>
        <HeadingComponent heading="All Projects" subHeading="projects" />
      </div>

      {/* Search and Sorting */}
      <div className="flex justify-between items-center mb-4">

        <Input
          startContent={<SearchIcon />}
          placeholder="Search projects..."
          // value={searchQuery}
          // onChange={handleSearchChange}
          className="w-full md:w-1/3"
        />

        {/* <Select
          label="Favorite Animal"
          placeholder="Select an animal"
          selectionMode="multiple"
          className="max-w-xs"
        >
          {animals?.map((animal) => (
            <SelectItem key={animal.key}>
              {animal.label}
            </SelectItem>
          ))}
        </Select> */}


      </div>


      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projects.map((project: IProject) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>

      {/* Pagination */}

      <div className="flex justify-center my-8">
        <Pagination
          total={10}
          initialPage={1}
        // onChange={handlePageChange}
        />
      </div>
    </Container>
  );
}



