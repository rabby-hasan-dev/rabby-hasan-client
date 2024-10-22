const ProjectLinks: React.FC<{ githubRepoClient: string, githubRepoServer: string, liveDemo?: string }> = ({ githubRepoClient, githubRepoServer, liveDemo }) => (
    <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Project Links</h2>
        <ul className="list-none">
            <li>
                <a href={githubRepoClient} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Client Repository
                </a>
            </li>
            <li>
                <a href={githubRepoServer} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Server Repository
                </a>
            </li>
            {liveDemo && (
                <li>
                    <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Live Demo
                    </a>
                </li>
            )}
        </ul>
    </div>
);
