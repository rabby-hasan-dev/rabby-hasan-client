



import Image from "next/image";
import { FilesIcon } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/src/assets/icons";
import TypeAnimationWrapper from "@/src/components/UI/TypeAnimation";
import ProfessionalImage from '@/src/assets/brandLogo/professional1.png'
import { FaReact, FaNodeJs, FaCss3Alt, FaJsSquare } from 'react-icons/fa'; // React, Node.js, CSS, JS Icons
import { SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs, SiGit, SiFigma } from 'react-icons/si'; // MongoDB, Express, Tailwind, Next.js Icons

const AboutMePage = () => {

  const socialIcons = [
    { Icon: TwitterIcon, link: 'https://twitter.com/yourprofile' },
    { Icon: LinkedinIcon, link: 'https://linkedin.com/in/yourprofile' },
    { Icon: GithubIcon, link: 'https://github.com/yourprofile' }
  ];


  const frontendSkills = [
    { name: 'JavaScript', icon: <FaJsSquare />, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'React', icon: <FaReact />, link: 'https://reactjs.org/' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, link: 'https://tailwindcss.com/' },
    { name: 'Next.js', icon: <SiNextdotjs />, link: 'https://nextjs.org/' }
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

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-50 to-slate-200 dark:from-gray-800 dark:to-gray-900 transition duration-500 py-16">
        <div className="container mx-auto px-6 text-center">
          {/* Hero Section */}
          <div className="relative">
            <Image className="rounded-full w-80 h-80 mx-auto shadow-xl object-cover  object-top" src={ProfessionalImage} alt="rabby pic" />
            <div className='bg-white dark:bg-gray-800 mt-12 py-8 px-6 rounded-lg shadow-lg transition duration-500'>
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                Hi, I am <span className='text-red-500'>Rabby Hasan</span>, <br />
                a <span><TypeAnimationWrapper /></span>
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                As a passionate web developer, my goal is to create immersive and intuitive digital experiences that exceed user expectations.
              </p>
            </div>
          </div>

          {/* Social and CV Section */}
          <div className='mt-12 flex flex-col lg:flex-row lg:justify-around lg:items-center space-y-8 lg:space-y-0'>
            {/* Social Links */}
            <div>
              <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4'>Connect With Me</h3>
              <div className='flex justify-center space-x-4'>
                {socialIcons.map(({ Icon, link }, idx) => (
                  <a href={link} key={idx} target="_blank" rel="noopener noreferrer">
                    <button className='p-4 text-3xl bg-white dark:bg-gray-700 hover:bg-blue-200 dark:hover:bg-blue-600 rounded-full shadow-lg transform hover:scale-110 transition duration-300'>
                      <Icon />
                    </button>
                  </a>
                ))}
              </div>
            </div>

            {/* Download CV */}
            <div>
              <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4'>Download My CV</h3>
              <a href="https://drive.google.com/file/d/1m-18sCd82jnFhwsCC0oxOIOlHJ2Gxscc/view?usp=drive_link" className='inline-block'>
                <button className='p-4 text-2xl bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700 text-white rounded-full shadow-lg hover:bg-blue-500 dark:hover:bg-blue-600 hover:scale-105 transition duration-300'>
                  <FilesIcon />
                </button>
              </a>
            </div>
          </div>



          {/* part to part skills */}
          <div className="my-12 ">
            {/* Technical Skills Section */}
            <h3 className='text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6'>Technical Skills</h3>
            <div className="grid grid-cols-2">

              {/* Frontend Skills */}
              <div className="mb-8">
                <h4 className='text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4'>Frontend Skills</h4>
                <div className='flex justify-center flex-wrap gap-4'>
                  {frontendSkills.map((skill, idx) => (
                    <a
                      key={idx}
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-lg shadow hover:bg-blue-100 dark:hover:bg-gray-600 transition duration-300'
                    >
                      {skill.icon} {/* Icon */}
                      {skill.name} {/* Skill Name */}
                    </a>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div className="mb-8">
                <h4 className='text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4'>Backend Skills</h4>
                <div className='flex justify-center flex-wrap gap-4'>
                  {backendSkills.map((skill, idx) => (
                    <a
                      key={idx}
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-lg shadow hover:bg-blue-100 dark:hover:bg-gray-600 transition duration-300'
                    >
                      {skill.icon} {/* Icon */}
                      {skill.name} {/* Skill Name */}
                    </a>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="mb-8">
                <h4 className='text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4'>Tools</h4>
                <div className='flex justify-center flex-wrap gap-4'>
                  {tools.map((tool, idx) => (
                    <a
                      key={idx}
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-lg shadow hover:bg-blue-100 dark:hover:bg-gray-600 transition duration-300'
                    >
                      {tool.icon} {/* Icon */}
                      {tool.name} {/* Skill Name */}
                    </a>
                  ))}
                </div>
              </div>




              {/* Other Skills */}
              <div className="mb-8">
                <h4 className='text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4'>Other Skills</h4>
                <div className='flex justify-center flex-wrap gap-4'>
                  {otherSkills.map((skill, idx) => (
                    <a
                      key={idx}
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-lg shadow hover:bg-blue-100 dark:hover:bg-gray-600 transition duration-300'
                    >
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
            <h3 className='text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6'>Soft Skills</h3>
            <div className='flex justify-center flex-wrap gap-4'>
              {['Effective Communication', 'Problem Solving', 'Team Collaboration', 'Adaptability', 'Time Management', 'Critical Thinking'].map((softSkill, idx) => (
                <span key={idx} className='px-4 py-2 bg-blue-50 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-lg shadow'>
                  {softSkill}
                </span>
              ))}
            </div>
          </div>

          {/* Interests Section */}
          <div className="my-12">
            <h3 className='text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4'>Interests</h3>
            <p className='text-lg text-gray-700 dark:text-gray-300'>
              Coding, Reading, Traveling, Photography, Learning New Technologies, Listening Songs
            </p>
          </div>

          {/* Vision Section */}
          <div className="my-12">
            <h3 className='text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4'>Vision</h3>
            <p className='text-lg text-gray-700 dark:text-gray-300'>
              I aim to contribute to innovative projects and collaborate with talented teams to create impactful solutions that enhance the user experience.
            </p>
          </div>
        </div>
      </section>
    </div>


  );
};

export default AboutMePage;
