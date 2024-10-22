

import Image from "next/image";
import { FilesIcon } from "lucide-react";
import { FacebookIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "@/src/assets/icons";
import TypeAnimationWrapper from "@/src/components/UI/TypeAnimation";
import ProfessionalImage from '@/src/assets/brandLogo/professional1.png'
import { FaMedium } from 'react-icons/fa';
import TechSkills from "@/src/components/modules/skills/TechSkills";
import SoftSkills from "@/src/components/modules/skills/SoftSkills";
import InterestSection from "./_components/InterestSection";
import VisionSection from "./_components/VisionSection";


const AboutMePage = () => {

  const socialIcons = [
    { Icon: TwitterIcon, link: 'https://twitter.com/yourprofile' },
    { Icon: LinkedinIcon, link: 'https://linkedin.com/in/yourprofile' },
    { Icon: GithubIcon, link: 'https://github.com/yourprofile' },
    { Icon: FacebookIcon, link: 'https://github.com/yourprofile' },
    { Icon: FaMedium, link: 'https://github.com/yourprofile' }
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
          <TechSkills />



          {/* Soft Skills Section */}
          <SoftSkills />


          {/* Interests Section */}
          <InterestSection />

          {/* Vision Section */}


          <VisionSection />











        </div>
      </section>
    </div>










  );
};

export default AboutMePage;
