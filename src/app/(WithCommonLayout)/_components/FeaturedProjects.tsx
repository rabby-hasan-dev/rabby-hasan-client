import HeadingComponent from "@/src/components/UI/HeadingComponent";
import PrimaryButton from "@/src/components/UI/PrimaryButton";
import ProjectCard from "@/src/components/UI/ProjectCard";

const FeaturedProjects = () => {
    const projects = [
        {
            _id: 1,
            title: "E-commerce Platform",
            description: "A fully functional e-commerce site with real-time payments and product management.",
            thumbnail: "/images/project1.jpg", // Replace with your own project images
            images: ["/projects/ecommerce", "/projects/ecommerce"]
        },
        {
            _id: 2,
            title: "Social Media App",
            description: "A dynamic social media application with real-time chat, feeds, and user interaction features.",
            thumbnail: "/images/project2.jpg",
            images: ["/projects/social-media-app", "/projects/social-media-app"]
        },
        {
            _id: 3,
            title: "Recipe Sharing Platform",
            description: "A community-driven recipe sharing app with upvotes, comments, and user profiles.",
            thumbnail: "/images/project3.jpg",
            images: ["/projects/recipe-platform", "/projects/recipe-platform"]
        },
    ];

    return (
        <div className="w-full px-6 py-12">

            <HeadingComponent heading='My Latest Projects' subHeading='Projects' />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {projects.slice(0, 3).map((project, index) => (
                    <ProjectCard key={project?._id} project={project} />
                ))}
            </div>

            {/* Button to View All Projects */}
            <PrimaryButton path="/projects" title="View My Projects" />

        </div>
    );
};

export default FeaturedProjects;
