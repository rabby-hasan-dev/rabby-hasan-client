const ProjectGallery: React.FC<{ images?: string[] }> = ({ images }) => (
    <div className="mb-6">
        {images?.length ? (
            <div>
                <h2 className="text-2xl font-semibold mb-2">Project Gallery</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {images.map((image, idx) => (
                        <img key={idx} src={image} alt={`Project image ${idx + 1}`} className="w-full h-auto rounded-lg shadow-md" />
                    ))}
                </div>
            </div>
        ) : (
            <p>No images available for this project.</p>
        )}
    </div>
);
