



import Image from "next/image";
import { FilesIcon } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/src/assets/icons";
import TypeAnimationWrapper from "@/src/components/UI/TypeAnimation";
import ProfessionalImage from '@/src/assets/brandLogo/professional1.png'
import { FaReact, FaNodeJs, FaJsSquare, FaCode, FaBookReader, FaTrain, FaCameraRetro, FaMusic, FaCubes, FaComments, FaLightbulb, FaUsers, FaFacebook, FaMediumM, FaMedium } from 'react-icons/fa'; // React, Node.js, CSS, JS Icons
import { SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs, SiGit, SiFigma, SiFacebook } from 'react-icons/si'; // MongoDB, Express, Tailwind, Next.js Icons


const AboutMePage = () => {

  const socialIcons = [
    { Icon: TwitterIcon, link: 'https://twitter.com/yourprofile' },
    { Icon: LinkedinIcon, link: 'https://linkedin.com/in/yourprofile' },
    { Icon: GithubIcon, link: 'https://github.com/yourprofile' },
    { Icon: SiFacebook, link: 'https://github.com/yourprofile' },
    { Icon: FaMedium, link: 'https://github.com/yourprofile' }
  ];


  const frontendSkills = [
    { name: 'JavaScript', icon: <FaJsSquare />, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'React', icon: <FaReact />, link: 'https://reactjs.org/' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, link: 'https://tailwindcss.com/' },
    {
      name: 'Next.js', icon: <SiNextdotjs />, link: 'https://nextjs.org/',
      projectsCompleted: 5,
    }

  ];

  const backendSkills = [
    { name: 'Node.js', icon: <FaNodeJs />, link: 'https://nodejs.org/' },
    { name: 'Express', icon: <SiExpress />, link: 'https://expressjs.com/' },
    { name: 'MongoDB', icon: <SiMongodb />, link: 'https://www.mongodb.com/' }
  ];

  const tools = [
    { name: 'Git', icon: <SiGit />, link: 'https://git-scm.com/' },
    { name: 'Figma', icon: <SiFigma />, link: 'https://www.figma.com/' }
  ];

  const otherSkills = [
    { name: 'Problem Solving', icon: '🧠', link: '#' },
    { name: 'Team Collaboration', icon: '🤝', link: '#' }
  ];

  const interests = [
    { name: 'Coding', icon: <FaCode /> },
    { name: 'Reading', icon: <FaBookReader /> },
    { name: 'Traveling', icon: <FaTrain /> },
    { name: 'Photography', icon: <FaCameraRetro /> },
    { name: 'Learning New Technologies', icon: <FaCubes /> },
    { name: 'Listening to Songs', icon: <FaMusic /> },
  ];

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

    <div>
      <section className="bg-gradient-to-r from-blue-50 to-slate-100 dark:from-gray-800 dark:to-gray-900 transition duration-500 py-16">
        <div className="container mx-auto px-6 text-center">
          {/* Hero Section */}
          <div className="relative">
            <Image className="rounded-full w-80 h-80 mx-auto shadow-xl object-cover object-top" src={ProfessionalImage} alt="Rabby Hasan" />
            <div className="bg-white dark:bg-gray-800 mt-12 py-8 px-6 rounded-lg shadow-lg transition duration-500">
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                Hi, I am <span className="text-red-500">Rabby Hasan</span>, <br />
                a <span><TypeAnimationWrapper /></span>
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                As a passionate web developer, my goal is to create immersive and intuitive digital experiences that exceed user expectations.
              </p>
            </div>
          </div>

          {/* Social and CV Section */}
          <div className="mt-12 flex flex-col lg:flex-row lg:justify-around lg:items-center space-y-8 lg:space-y-0">
            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Connect With Me</h3>
              <div className="flex justify-center space-x-4">
                {socialIcons.map(({ Icon, link }, idx) => (
                  <a href={link} key={idx} target="_blank" rel="noopener noreferrer">
                    <button className="p-4 text-3xl bg-white dark:bg-gray-700 hover:bg-blue-200 dark:hover:bg-blue-600 rounded-full shadow-lg transform hover:scale-110 transition duration-300">
                      <Icon />
                    </button>
                  </a>
                ))}
              </div>
            </div>

            {/* Download CV */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Download My CV</h3>
              <a href="https://drive.google.com/file/d/1m-18sCd82jnFhwsCC0oxOIOlHJ2Gxscc/view?usp=drive_link" className="inline-block">
                <button className="p-4 text-2xl bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700 text-white rounded-full shadow-lg hover:bg-blue-500 dark:hover:bg-blue-600 hover:scale-105 transition duration-300">
                  <FilesIcon />
                </button>
              </a>
            </div>
          </div>

          {/* Technical Skills Section */}
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

          {/* Soft Skills Section */}
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

          {/* Interests Section */}
          <div className="my-12">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">Interests</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Grid layout with responsive columns */}
              {/* Interest Cards */}
              {interests.map((interest, idx) => (
                <div key={idx} className="flex items-center p-4 bg-blue-50 dark:bg-gray-700 rounded-lg shadow-lg transition duration-300 hover:bg-blue-100 dark:hover:bg-gray-600">
                  {interest.icon} {/* Icon */}
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 ml-4">{interest.name}</h4> {/* Interest Name */}
                </div>
              ))}
            </div>
          </div>

          {/* Vision Section */}

          <div className="my-12">
            <h3 className="text-4xl font-extrabold text-gray-800 dark:text-gray-200 mb-6 animate__animated animate__fadeInDown">
              Vision
            </h3>
            <div className="relative p-8 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg transition duration-300 hover:shadow-xl transform hover:scale-105">
              <div className="relative z-10">
                <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
                  My vision is to create a world where technology empowers individuals and communities to achieve their fullest potential.
                  Through innovative solutions and a user-centered approach, I aim to bridge the gap between digital and physical experiences,
                  fostering connection and accessibility for all.
                </p>
                <p className="text-md font-semibold text-gray-800 dark:text-gray-300">
                  "Empowering connections, inspiring change."
                </p>
              </div>
            </div>
          </div>












        </div>
      </section>
    </div>










  );
};

export default AboutMePage;
