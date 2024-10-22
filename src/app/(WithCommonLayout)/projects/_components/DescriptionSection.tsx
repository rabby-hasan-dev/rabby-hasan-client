const ProjectDescription: React.FC<{ description: string }> = ({ description }) => (
    <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Description</h2>
        <p className="text-gray-700">{description}</p>
    </div>
);
