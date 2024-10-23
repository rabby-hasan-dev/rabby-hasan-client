// Use relevant icon library like Heroicons
import HeadingComponent from "@/src/components/UI/HeadingComponent";
import { Button } from "@nextui-org/button";
import { BriefcaseIcon, CodeIcon, GlobeIcon } from "lucide-react";

const ExperienceHighlights = () => {
    return (
        <div className="w-full px-6 py-12  text-center lg:text-left">
            <HeadingComponent heading='Experience & Highlights' subHeading=' Experience' />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* Highlight 1 */}
                <div className="flex flex-col items-center text-center">
                    <BriefcaseIcon className="h-12 w-12 text-blue-500 mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">5+ Years Experience</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                        Developing innovative and user-friendly web applications.
                    </p>
                </div>

                {/* Highlight 2 */}
                <div className="flex flex-col items-center text-center">
                    <CodeIcon className="h-12 w-12 text-green-500 mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">50+ Websites Built</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                        Delivering high-quality, performance-optimized websites.
                    </p>
                </div>

                {/* Highlight 3 */}
                <div className="flex flex-col items-center text-center">
                    <GlobeIcon className="h-12 w-12 text-yellow-500 mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Worked with Fortune 500</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                        Collaborating with industry-leading companies worldwide.
                    </p>
                </div>
            </div>

            {/* Button to Full Experience Section */}
            <div className="flex justify-center ">
                <Button
                    as="a"
                    href="/about#experience"
                    className="px-8 py-4 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
                >
                    View Full Experience
                </Button>
            </div>
        </div>
    );
};

export default ExperienceHighlights;
