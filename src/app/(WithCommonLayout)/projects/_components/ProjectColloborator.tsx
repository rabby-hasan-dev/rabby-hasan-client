const ProjectCollaborators: React.FC<{ collaborators: string }> = ({ collaborators }) => (
    <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Collaborators</h2>
        <p>{collaborators}</p>
    </div>
);
