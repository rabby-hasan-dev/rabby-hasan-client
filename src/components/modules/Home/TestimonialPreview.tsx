import HeadingComponent from "@/src/components/UI/HeadingComponent";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody } from "@nextui-org/card";


const TestimonialsPreview = () => {
    const testimonials = [
        {
            id: 1,
            quote: "Rabby is an exceptional web developer who transformed our vision into reality. Highly recommended!",
            author: "Jane Doe",
            position: "CEO, Example Company",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s'
        },
        {
            id: 2,
            quote: "The level of professionalism and dedication Rabby brings to each project is unmatched. A true asset!",
            author: "John Smith",
            position: "Project Manager, Another Company",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s'
        },
        {
            id: 3,
            quote: "The level of professionalism and dedication Rabby brings to each project is unmatched. A true asset!",
            author: "John Smith",
            position: "Project Manager, Another Company",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s'
        },
    ];

    return (
        <div className="w-full px-6 py-12">
            <HeadingComponent heading='My Bliever Say' subHeading='testimonials' />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {testimonials.map((testimonial) => (
                    <Card className="max-w-md mx-auto" style={{ padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
                        <CardBody>
                            <div className="flex items-center space-x-4">
                                <Avatar
                                    src={testimonial.image}
                                    alt={testimonial.author}
                                    size="lg"
                                    className="rounded-full"
                                    style={{ height: '64px', width: '64px' }} // You can adjust the size here
                                />
                                <div>
                                    <h3>{testimonial.author}</h3>
                                    <p style={{ color: '$accents8' }}>{testimonial.position}</p>
                                </div>
                            </div>
                            <p className="mt-4" style={{ color: '$accents7' }}>
                                {testimonial.quote}
                            </p>
                        </CardBody>
                    </Card>
                ))}


            </div>
        </div>
    );
};

export default TestimonialsPreview;
