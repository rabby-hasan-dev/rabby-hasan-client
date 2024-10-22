const ProjectTestimonials: React.FC<{ testimonials: string[] }> = ({ testimonials }) => (
    <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Testimonials</h2>
        <ul className="list-disc ml-5">
            {testimonials.map((testimonial, idx) => (
                <li key={idx} className="italic">{testimonial}</li>
            ))}
        </ul>
    </div>
);
