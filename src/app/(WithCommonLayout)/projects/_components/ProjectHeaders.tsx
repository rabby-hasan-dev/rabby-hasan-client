import { IProject } from "@/src/types/project.types";

export const ProjectHeader: React.FC<{ project: IProject }> = ({ project }) => (
    <div className="bg-gray-800 text-white p-6 rounded-lg mb-6">
        <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
        <p className="text-lg mb-2">By: {project.author}</p>
        <div className="flex justify-between">
            <p className="text-sm">Category: {project.category || 'N/A'}</p>
            <p className="text-sm">
                Duration: {project.startDate.toDateString()} - {project.endDate?.toDateString() || 'Ongoing'}
            </p>
        </div>
    </div>
);
