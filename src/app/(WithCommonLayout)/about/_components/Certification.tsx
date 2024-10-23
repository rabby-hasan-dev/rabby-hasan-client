

const Certification = () => {
    return (
        <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600 dark:text-blue-400">
                Certifications
            </h2>
            <div className="flex flex-wrap justify-center space-x-4 space-y-4">
                {/* Example Certification Badge */}
                <a
                    href="#"
                    className="flex items-center p-3 border border-blue-600 rounded-lg bg-white dark:bg-gray-800 hover:bg-blue-600 hover:text-white transition duration-300 shadow-md hover:shadow-lg"
                >
                    <span className="font-semibold">Certified Web Developer</span>
                </a>

                <a
                    href="#"
                    className="flex items-center p-3 border border-green-600 rounded-lg bg-white dark:bg-gray-800 hover:bg-green-600 hover:text-white transition duration-300 shadow-md hover:shadow-lg"
                >
                    <span className="font-semibold">JavaScript Developer Certification</span>
                </a>

                <a
                    href="#"
                    className="flex items-center p-3 border border-red-600 rounded-lg bg-white dark:bg-gray-800 hover:bg-red-600 hover:text-white transition duration-300 shadow-md hover:shadow-lg"
                >
                    <span className="font-semibold">React.js Certification</span>
                </a>

                <a
                    href="#"
                    className="flex items-center p-3 border border-yellow-600 rounded-lg bg-white dark:bg-gray-800 hover:bg-yellow-600 hover:text-white transition duration-300 shadow-md hover:shadow-lg"
                >
                    <span className="font-semibold">Node.js Certification</span>
                </a>

                {/* Add more certification badges as needed */}
            </div>
        </section>
    );
};

export default Certification;