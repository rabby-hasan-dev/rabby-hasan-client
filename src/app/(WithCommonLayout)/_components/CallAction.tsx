import HeadingComponent from "@/src/components/UI/HeadingComponent";
import { Button } from "@nextui-org/button";


const CallToAction = () => {
    return (
        <div className="w-full py-12  ">
            <div className="text-center bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
                <HeadingComponent heading="Ready to Elevate Your Project?" subHeading="Contact" />
                <p className="text-lg text-gray-800 dark:text-gray-300 mb-8">
                    As a passionate web developer, I offer services tailored to meet your needs.
                    From creating stunning websites to developing robust applications, I'm here to help you succeed!
                </p>

                <div className="flex justify-center space-x-4">
                    <Button
                        as="a"
                        href="/contact"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
                    >
                        Contact Me
                    </Button>
                    <Button
                        as="a"
                        href="/projects"
                        className="border border-blue-600 text-blue-600 hover:bg-blue-700 hover:text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
                    >
                        View My Projects
                    </Button>
                </div>
            </div>
        </div>

    );
};

export default CallToAction;
