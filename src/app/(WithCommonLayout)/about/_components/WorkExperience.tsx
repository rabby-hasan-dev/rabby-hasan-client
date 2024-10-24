import HeadingComponent from '@/src/components/UI/HeadingComponent';
import React from 'react';

const WorkExperience = () => {

    const experiences = [
        {
            position: 'Frontend Developer',
            company: 'Company A',
            companyWebsite: 'https://companya.com',
            startDate: new Date('2020-01-01'),
            endDate: null,
            description: 'Developed user-friendly interfaces and improved user experience.',
            technologiesUsed: ['React', 'Tailwind CSS'],
        },
        {
            position: 'Web Developer',
            company: 'Company B',
            companyWebsite: 'https://companyb.com',
            startDate: new Date('2018-06-01'),
            endDate: new Date('2019-12-31'),
            description: 'Worked on backend integrations and responsive design.',
            technologiesUsed: ['Node.js', 'Express', 'MongoDB'],
        },


        // Add more experiences as needed
    ];







    return (

        <section className="my-12 bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
            <HeadingComponent heading="My Work Experience" subHeading="Work Experience" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="p-6 border rounded-lg hover:shadow-lg transition-shadow duration-300 bg-white border-gray-300 dark:bg-gray-800 dark:border-gray-700"
                    >
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                            {exp.position} at {exp.company}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            {new Date(exp.startDate).toLocaleDateString()} - {exp.endDate ? new Date(exp.endDate).toLocaleDateString() : 'Present'}
                        </p>
                        <p className="text-gray-700 mt-2 dark:text-gray-300">{exp.description}</p>
                        <div className="mt-4">
                            <h4 className="font-semibold text-gray-800 dark:text-gray-200">Technologies Used:</h4>
                            <ul className="flex flex-wrap gap-2 mt-1">
                                {exp.technologiesUsed.map((tech, techIndex) => (
                                    <li key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm dark:bg-blue-700 dark:text-blue-100">
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                            <a href={exp.companyWebsite} target="_blank" rel="noopener noreferrer">View Details</a>
                        </button>
                    </div>
                ))}
            </div>
        </section>



    );
};

export default WorkExperience;