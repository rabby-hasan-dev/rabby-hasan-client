const ProjectTechAndTags: React.FC<{ technologies: string[]; tags: string[] }> = ({ technologies, tags }) => (
    <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Technologies & Tags</h2>
        <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 bg-gray-200 rounded-full text-sm">{tech}</span>
            ))}
        </div>
        <div className="mt-4">
            <h3 className="text-xl font-medium mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-200 rounded-full text-sm">{tag}</span>
                ))}
            </div>
        </div>
    </div>
);
