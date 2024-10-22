import { FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiFigma, SiGit, SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";


const TechSkills = () => {

    const frontendSkills = [
        { name: 'JavaScript', icon: <FaJsSquare />, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { name: 'React', icon: <FaReact />, link: 'https://reactjs.org/' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, link: 'https://tailwindcss.com/' },
        {
            name: 'Next.js', icon: <SiNextdotjs />, link: 'https://nextjs.org/',
            projectsCompleted: 5,
        },
        {
            name: 'Next.js', icon: <SiNextdotjs />, link: 'https://nextjs.org/',
            projectsCompleted: 5,
        },
        {
            name: 'Next.js', icon: <SiNextdotjs />, link: 'https://nextjs.org/',
            projectsCompleted: 5,
        },
        {
            name: 'Next.js', icon: <SiNextdotjs />, link: 'https://nextjs.org/',
            projectsCompleted: 5,
        },
        {
            name: 'Next.js', icon: <SiNextdotjs />, link: 'https://nextjs.org/',
            projectsCompleted: 5,
        },

    ];

    const backendSkills = [
        { name: 'Node.js', icon: <FaNodeJs />, link: 'https://nodejs.org/' },
        { name: 'Express', icon: <SiExpress />, link: 'https://expressjs.com/' },
        { name: 'MongoDB', icon: <SiMongodb />, link: 'https://www.mongodb.com/' },
        { name: 'MongoDB', icon: <SiMongodb />, link: 'https://www.mongodb.com/' },
        { name: 'MongoDB', icon: <SiMongodb />, link: 'https://www.mongodb.com/' },
        { name: 'MongoDB', icon: <SiMongodb />, link: 'https://www.mongodb.com/' },
    ];

    const tools = [
        { name: 'Git', icon: <SiGit />, link: 'https://git-scm.com/' },
        { name: 'Figma', icon: <SiFigma />, link: 'https://www.figma.com/' },
        { name: 'Git', icon: <SiGit />, link: 'https://git-scm.com/' },
        { name: 'Figma', icon: <SiFigma />, link: 'https://www.figma.com/' },
        { name: 'Git', icon: <SiGit />, link: 'https://git-scm.com/' },
        { name: 'Figma', icon: <SiFigma />, link: 'https://www.figma.com/' },
    ];

    const otherSkills = [
        { name: 'Problem Solving', icon: '🧠', link: '#' },
        { name: 'Team Collaboration', icon: '🤝', link: '#' }
    ];


    return (
        <div className="my-12">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Adjusted to a more responsive grid */}
                {/* Frontend Skills */}
                <div>
                    <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Frontend Skills</h4>
                    <div className="flex flex-wrap justify-center gap-4">
                        {frontendSkills.map((skill, idx) => (
                            <a key={idx} href={skill.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-lg shadow hover:bg-blue-100 dark:hover:bg-gray-600 transition duration-300">
                                {skill.icon} {/* Icon */}
                                {skill.name} {/* Skill Name */}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Backend Skills */}
                <div>
                    <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Backend Skills</h4>
                    <div className="flex flex-wrap justify-center gap-4">
                        {backendSkills.map((skill, idx) => (
                            <a key={idx} href={skill.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-lg shadow hover:bg-blue-100 dark:hover:bg-gray-600 transition duration-300">
                                {skill.icon} {/* Icon */}
                                {skill.name} {/* Skill Name */}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Tools */}
                <div>
                    <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Tools</h4>
                    <div className="flex flex-wrap justify-center gap-4">
                        {tools.map((tool, idx) => (
                            <a key={idx} href={tool.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-lg shadow hover:bg-blue-100 dark:hover:bg-gray-600 transition duration-300">
                                {tool.icon} {/* Icon */}
                                {tool.name} {/* Skill Name */}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Other Skills */}
                <div>
                    <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Other Skills</h4>
                    <div className="flex flex-wrap justify-center gap-4">
                        {otherSkills.map((skill, idx) => (
                            <a key={idx} href={skill.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-lg shadow hover:bg-blue-100 dark:hover:bg-gray-600 transition duration-300">
                                {skill.icon} {/* Icon */}
                                {skill.name} {/* Skill Name */}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TechSkills;