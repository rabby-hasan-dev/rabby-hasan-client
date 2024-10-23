import HeadingComponent from "@/src/components/UI/HeadingComponent";
import { Button } from "@nextui-org/button";


const CallToAction = () => {
    return (
        // <div className="w-full py-12 px-6">
        //     <HeadingComponent heading="Ready to Elevate Your Project?" subHeading="Contact" />
        //     <p className="text-lg text-gray-300 mb-8 text-center">
        //         As a passionate web developer, I offer services tailored to meet your needs.
        //         From creating stunning websites to developing robust applications, I'm here to help you succeed!
        //     </p>

        //     <div className="flex justify-center space-x-4">
        //         <Button
        //             as="a"
        //             href="/contact"
        //             className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        //         >
        //             Contact Me
        //         </Button>
        //         <Button
        //             as="a"
        //             href="/projects"
        //             className="border border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        //         >
        //             View My Projects
        //         </Button>
        //     </div>
        // </div>
        <div className="w-full py-12 px-6 bg-gray-100 dark:bg-gray-800">
            <HeadingComponent heading="Ready to Elevate Your Project?" subHeading="Contact" />
            <p className="text-lg text-gray-800 dark:text-gray-300 mb-8 text-center">
                As a passionate web developer, I offer services tailored to meet your needs.
                From creating stunning websites to developing robust applications, I'm here to help you succeed!
            </p>

            <div className="flex justify-center space-x-4">
                <Button
                    as="a"
                    href="/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                >
                    Contact Me
                </Button>
                <Button
                    as="a"
                    href="/projects"
                    className="border border-blue-600 text-blue-600 hover:bg-blue-700 hover:text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                >
                    View My Projects
                </Button>
            </div>
        </div>
    );
};

export default CallToAction;
