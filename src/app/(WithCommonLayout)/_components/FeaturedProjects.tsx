import HeadingComponent from "@/src/components/UI/HeadingComponent";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";


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
                {projects.slice(0, 3).map((project, index) => (
                    <div key={index} className="relative w-full h-[300px] overflow-hidden">
                        <Image
                            alt={`Project ${project.title}`}
                            className="w-full h-full object-cover scale-125 -translate-y-6"
                            src={project.link} // Assuming each project has an imageUrl property

                        />
                        <div className="absolute z-10 top-1 flex flex-col items-start p-4">
                            <p className="text-tiny text-white/60 uppercase font-bold">New</p>
                            <h4 className="text-black font-medium text-2xl">{project.title}</h4>
                        </div>
                        <div className="absolute bg-white/30 bottom-0 border-t border-zinc-100/50 z-10 flex justify-between items-center w-full p-4">
                            <div>
                                <p className="text-black text-tiny">Available soon.</p>
                                <p className="text-black text-tiny">Get notified.</p>
                            </div>
                            <button className="text-tiny text-white bg-blue-500 hover:bg-blue-600 rounded-full py-1 px-3">
                                Details
                            </button>
                        </div>
                    </div>
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
