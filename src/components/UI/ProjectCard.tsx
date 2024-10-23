import { IProject } from "@/src/types/project.types";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import Link from "next/link";


const ProjectCard = ({ project }: { project: IProject }) => {
    return (
        <div key={project?._id} className="relative w-full h-[300px] overflow-hidden rounded-lg shadow-lg">
            <Image
                alt={`Project ${project.title}`}
                className="w-full h-full object-cover scale-125 -translate-y-6"
                src={project?.images?.[0] || undefined}
                loading="lazy"
            />
            <div className="absolute z-10 top-1 flex flex-col items-start p-4 space-y-1">
                <p className="text-tiny text-white bg-black/30 dark:bg-gray-800/80 border-t border-zinc-100/50 uppercase font-bold">
                    Full stack
                </p>
                <h4 className="text-white bg-black/30 dark:bg-gray-800/80 border-t border-zinc-100/50 font-medium text-2xl">
                    {project.title}
                </h4>
            </div>
            <div className="absolute bg-white/30 dark:bg-gray-800/80 bottom-0 border-t border-zinc-100/50 z-10 flex justify-between items-center w-full p-4">
                <div>
                    <p className="text-black dark:text-white text-tiny">Available soon.</p>
                    <p className="text-black dark:text-white text-tiny">Get notified.</p>
                </div>
                <Link href={`/projects/${project?._id}`}>
                    <Button size="sm" color="primary" className="text-tiny text-white bg-blue-500 hover:bg-blue-600 rounded-full py-1 px-3">
                        Details
                    </Button>
                </Link>
            </div>
        </div>


    );
};

export default ProjectCard;