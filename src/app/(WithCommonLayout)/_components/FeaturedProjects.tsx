import HeadingComponent from "@/src/components/UI/HeadingComponent";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";


const FeaturedProjects = () => {
    const projects = [
        {
            id: 1,
            title: "E-commerce Platform",
            description: "A fully functional e-commerce site with real-time payments and product management.",
            thumbnail: "/images/project1.jpg", // Replace with your own project images
            link: "/projects/ecommerce",
        },
        {
            id: 2,
            title: "Social Media App",
            description: "A dynamic social media application with real-time chat, feeds, and user interaction features.",
            thumbnail: "/images/project2.jpg",
            link: "/projects/social-media-app",
        },
        {
            id: 3,
            title: "Recipe Sharing Platform",
            description: "A community-driven recipe sharing app with upvotes, comments, and user profiles.",
            thumbnail: "/images/project3.jpg",
            link: "/projects/recipe-platform",
        },
    ];

    return (
        <div className="w-full px-6 py-12">

            <HeadingComponent heading='My Latest Projects' subHeading='Projects' />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {projects.slice(0, 3).map((project) => (
                    <Card key={project.id} className="hover:shadow-lg transition-shadow duration-300">
                        <CardBody>
                            <img
                                src={project.thumbnail}
                                alt={project.title}
                                className="h-48 w-full object-cover rounded-t-lg"
                            />
                        </CardBody>
                        <CardFooter className="bg-white dark:bg-gray-800 text-center">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{project.title}</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                            <Button
                                as="a"
                                href={project.link}
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                View Project
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {/* Button to View All Projects */}
            <div className="flex justify-center">
                <Button
                    as="a"
                    href="/projects"
                    className="px-8 py-4 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
                >
                    View All Projects
                </Button>
            </div>
        </div>
    );
};

export default FeaturedProjects;
