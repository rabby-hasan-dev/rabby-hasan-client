import HeadingComponent from "@/src/components/UI/HeadingComponent";

const Education = () => {
    return (
        <section className="mb-12">

            <HeadingComponent heading=' My Educations' subHeading='Education' />
            <div className="space-y-6">
                {/* Bachelor of Science in Computer Science */}
                <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow duration-300 flex items-center space-x-4">
                    <img src="/path/to/university-logo.png" alt="University of XYZ Logo" className="w-16 h-16 rounded-full" />
                    <div>
                        <h3 className="text-xl font-bold">Bachelor of Science in Computer Science</h3>
                        <p className="text-gray-600">University of XYZ, Graduated: 2021</p>
                        <p className="text-gray-600">Relevant Courses: Web Development, Data Structures, Algorithms</p>
                        <p className="text-gray-600">
                            <a href="link/to/certification" className="text-blue-600 hover:underline">View Certification</a>
                        </p>
                    </div>
                </div>

                {/* Web Development Bootcamp */}
                <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow duration-300 flex items-center space-x-4">
                    <img src="/path/to/bootcamp-logo.png" alt="Coding Academy Logo" className="w-16 h-16 rounded-full" />
                    <div>
                        <h3 className="text-xl font-bold">Web Development Bootcamp</h3>
                        <p className="text-gray-600">Coding Academy, Completed: 2020</p>
                        <p className="text-gray-600">Skills Acquired: HTML, CSS, JavaScript, React</p>
                        <p className="text-gray-600">
                            <a href="link/to/certification" className="text-blue-600 hover:underline">View Certification</a>
                        </p>
                    </div>
                </div>

                {/* Add more education cards as needed */}
            </div>
        </section>
    );
};

export default Education;