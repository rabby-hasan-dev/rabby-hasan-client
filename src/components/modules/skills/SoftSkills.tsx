import React from 'react';
import { FaComments, FaLightbulb, FaUsers } from 'react-icons/fa';

const SoftSkills = () => {
    const softSkills = [
        {
            name: 'Effective Communication',
            description: 'Ability to convey information clearly and effectively.',
            certifications: ['Communication Skills Certificate'],
            teachers: ['John Doe', 'Jane Smith'],
            teams: ['Marketing Team', 'Sales Team'],
            icon: <FaComments className="text-2xl text-blue-500" />, // Example icon
        },
        {
            name: 'Problem Solving',
            description: 'Skilled in identifying issues and implementing solutions.',
            certifications: ['Problem Solving Workshop'],
            teachers: ['Alice Johnson'],
            teams: ['Development Team'],
            icon: <FaLightbulb className="text-2xl text-blue-500" />, // Example icon
        },
        {
            name: 'Team Collaboration',
            description: 'Working effectively with others towards a common goal.',
            certifications: ['Team Building Certification'],
            teachers: ['Robert Brown'],
            teams: ['Project Management Team', 'Design Team'],
            icon: <FaUsers className="text-2xl text-blue-500" />, // Example icon
        },
        // Add more soft skills as needed...
    ];

    return (
        <div className="my-12">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">Soft Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Grid layout for responsive design */}
                {/* Soft Skill Cards */}
                {softSkills.map((skill, idx) => (
                    <div key={idx} className="p-4 bg-blue-50 dark:bg-gray-700 rounded-lg shadow-lg transition duration-300 hover:bg-blue-100 dark:hover:bg-gray-600">
                        <div className="flex items-center mb-2"> {/* Flex container for icon and title */}
                            {skill.icon} {/* Icon */}
                            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 ml-2">{skill.name}</h4> {/* Skill Name */}
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">{skill.description}</p> {/* Description */}

                        {/* Additional Information */}
                        <div className="mt-4 flex flex-wrap gap-2">
                            {skill.certifications.map((cert, certIdx) => (
                                <span key={certIdx} className="text-xs px-2 py-1 bg-blue-100 dark:bg-gray-600 text-blue-800 dark:text-blue-200 rounded-full">
                                    {cert}
                                </span>
                            ))}
                            {skill.teachers.map((teacher, teacherIdx) => (
                                <span key={teacherIdx} className="text-xs px-2 py-1 bg-green-100 dark:bg-gray-600 text-green-800 dark:text-green-200 rounded-full">
                                    {teacher}
                                </span>
                            ))}
                            {skill.teams.map((team, teamIdx) => (
                                <span key={teamIdx} className="text-xs px-2 py-1 bg-yellow-100 dark:bg-gray-600 text-yellow-800 dark:text-yellow-200 rounded-full">
                                    {team}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SoftSkills;