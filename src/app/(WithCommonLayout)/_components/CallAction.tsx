import HeadingComponent from "@/src/components/UI/HeadingComponent";
import PrimaryButton from "@/src/components/UI/PrimaryButton";


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

                    <PrimaryButton path="/contact" title=" Contact Me" />
                    <PrimaryButton path="/projects" title="View My Projects" />

                </div>
            </div>
        </div>

    );
};

export default CallToAction;
