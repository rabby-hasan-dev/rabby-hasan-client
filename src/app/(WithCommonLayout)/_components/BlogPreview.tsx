
import HeadingComponent from "@/src/components/UI/HeadingComponent";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";

const BlogPreview = () => {
    const articles = [
        {
            id: 1,
            title: "Understanding React Hooks",
            excerpt: "Dive deep into the world of React Hooks and discover how they can enhance your functional components.",
            link: "/blog/react-hooks",
            image: "https://via.placeholder.com/400x200", // Replace with actual image URL
            publishDate: "2024-10-15",
        },
        {
            id: 2,
            title: "Tailwind CSS: A Utility-First Approach",
            excerpt: "Learn how to style your applications with Tailwind CSS, a utility-first CSS framework that makes styling easier.",
            link: "/blog/tailwind-css",
            image: "https://via.placeholder.com/400x200", // Replace with actual image URL
            publishDate: "2024-10-10",
        },
        {
            id: 3,
            title: "Building a RESTful API with Node.js",
            excerpt: "Explore the steps to create a robust RESTful API using Node.js and Express.",
            link: "/blog/restful-api-nodejs",
            image: "https://via.placeholder.com/400x200", // Replace with actual image URL
            publishDate: "2024-10-05",
        },
    ];

    return (
        <div className="w-full px-6 py-12">
            <HeadingComponent heading='Latest Blogs' subHeading='blog' />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {articles.map((article) => (
                    <Card key={article.id} className="hover:shadow-lg transition-shadow duration-300">
                        <CardBody>
                            {article.image && (
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-40 object-cover rounded-t-lg mb-4"
                                />
                            )}
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                {article.title}
                            </h3>
                            <div className="text-gray-500 text-sm mb-2">
                                Published on: {new Date(article.publishDate).toLocaleDateString()}
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                {article.excerpt}
                            </p>
                            <Button
                                as="a"
                                href={article.link}
                                className="text-blue-500 font-semibold hover:underline"
                            >
                                Read More
                            </Button>
                        </CardBody>
                    </Card>
                ))}
            </div>

            {/* Button to View All Articles */}
            <div className="flex justify-center">
                <Button
                    as="a"
                    href="/blog"
                    className="px-8 py-4 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
                >
                    View All Blog
                </Button>
            </div>
        </div>
    );
};

export default BlogPreview;

