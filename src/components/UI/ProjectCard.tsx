import { IProject } from "@/src/types/project.types";
import { Button } from "@nextui-org/button";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";


const ProjectCard = ({ project }: { project: IProject }) => {
    return (
        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">Full Stack </p>
                <h4 className="text-white/90 font-medium text-xl">{project?.title} </h4>
            </CardHeader>
            <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 w-full h-full object-cover"
                src={project?.images[0]}
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-2 items-center">
                    <Image
                        alt="Breathing app icon"
                        className="rounded-full w-10 h-11 bg-black"
                        src={project?.author?.profilePicture}
                    />
                    <div className="flex flex-col">
                        <p className="text-tiny text-white/60">Developer </p>
                        <p className="text-tiny text-white/60">Get a good night's sleep.</p>
                    </div>
                </div>
                <Button radius="full" size="sm">Details</Button>
            </CardFooter>
        </Card>
    );
};

export default ProjectCard;