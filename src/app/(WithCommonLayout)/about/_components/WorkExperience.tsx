import React from 'react';

const WorkExperience = () => {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
            <div className="space-y-6">
                {/* Example Job Role Card */}
                <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-bold">Frontend Developer at Company A</h3>
                    <p className="text-gray-600">Jan 2020 - Present</p>
                    <button className="mt-2 text-blue-600 hover:underline">View Details</button>
                </div>
                {/* Add more job cards as needed */}
            </div>
        </section>
    );
};

export default WorkExperience;