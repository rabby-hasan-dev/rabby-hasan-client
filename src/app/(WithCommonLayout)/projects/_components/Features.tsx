const ProjectFeatures: React.FC<{ features: string[] }> = ({ features }) => (
    <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Features</h2>
        <ul className="list-disc ml-5">
            {features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
            ))}
        </ul>
    </div>
);
