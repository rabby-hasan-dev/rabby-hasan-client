import HeadingComponent from "@/src/components/UI/HeadingComponent";
import Link from "next/link";


const Certification = () => {
    return (
        <section className="mb-12">

            <HeadingComponent heading='My Certifications' subHeading=' Certifications' />
            <div className="flex flex-wrap justify-center space-x-4 space-y-4">
                {/* Example Certification Badge */}
                <Link
                    href="#"
                    className="flex items-center p-3 border border-blue-600 rounded-lg bg-white dark:bg-gray-800 hover:bg-blue-600 hover:text-white transition duration-300 shadow-md hover:shadow-lg"
                >
                    <span className="font-semibold">Certified Web Developer</span>
                </Link>

                <Link
                    href="#"
                    className="flex items-center p-3 border border-green-600 rounded-lg bg-white dark:bg-gray-800 hover:bg-green-600 hover:text-white transition duration-300 shadow-md hover:shadow-lg"
                >
                    <span className="font-semibold">JavaScript Developer Certification</span>
                </Link>

                <Link
                    href="#"
                    className="flex items-center p-3 border border-red-600 rounded-lg bg-white dark:bg-gray-800 hover:bg-red-600 hover:text-white transition duration-300 shadow-md hover:shadow-lg"
                >
                    <span className="font-semibold">React.js Certification</span>
                </Link>

                <Link
                    href="#"
                    className="flex items-center p-3 border border-yellow-600 rounded-lg bg-white dark:bg-gray-800 hover:bg-yellow-600 hover:text-white transition duration-300 shadow-md hover:shadow-lg"
                >
                    <span className="font-semibold">Node.js Certification</span>
                </Link>

                {/* Add more certification badges as needed */}
            </div>
        </section>
    );
};

export default Certification;