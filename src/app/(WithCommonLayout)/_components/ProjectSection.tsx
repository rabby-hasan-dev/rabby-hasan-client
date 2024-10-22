import HeadingComponent from "@/src/components/UI/HeadingComponent";
import ProjectCard from "@/src/components/UI/ProjectCard";


const ProjectSection = () => {
    return (
        <div>
            <HeadingComponent heading='My Latest Projects' subHeading='Projects' />
            <div>
                <ProjectCard />
            </div>
        </div>
    );
};

export default ProjectSection;