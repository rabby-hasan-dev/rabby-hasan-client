import HeadingComponent from "@/src/components/UI/HeadingComponent";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";


const TestimonialsPreview = () => {
    const testimonials = [
        {
            id: 1,
            quote: "Rabby is an exceptional web developer who transformed our vision into reality. Highly recommended!",
            author: "Jane Doe",
            position: "CEO, Example Company",
        },
        {
            id: 2,
            quote: "The level of professionalism and dedication Rabby brings to each project is unmatched. A true asset!",
            author: "John Smith",
            position: "Project Manager, Another Company",
        },
    ];

    return (
        <div className="w-full px-6 py-12">

            <HeadingComponent heading='What Clients Say' subHeading='testimonials' />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {testimonials.map((testimonial) => (
                    <Card key={testimonial.id} className="hover:shadow-lg transition-shadow duration-300">
                        <CardBody>
                            <blockquote className="italic text-gray-700 dark:text-gray-300 mb-4">
                                "{testimonial.quote}"
                            </blockquote>
                            <p className="font-semibold text-gray-900 dark:text-gray-100">
                                - {testimonial.author}, <span className="text-gray-600 dark:text-gray-400">{testimonial.position}</span>
                            </p>
                        </CardBody>
                    </Card>
                ))}
            </div>

            {/* Button to View All Testimonials */}
            <div className="flex justify-center">
                <Button
                    as="a"
                    href="/about#testimonials"
                    className="px-8 py-4 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
                >
                    View All Testimonials
                </Button>
            </div>
        </div>
    );
};

export default TestimonialsPreview;
