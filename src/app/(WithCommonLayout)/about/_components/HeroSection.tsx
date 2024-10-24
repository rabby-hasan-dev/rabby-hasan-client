import TypeAnimationWrapper from '@/src/components/UI/TypeAnimation';
import Image from 'next/image';
import React from 'react';
import ProfessionalImage from '@/src/assets/brandLogo/professional1.png'

const HeroSection = () => {
    return (
        <div className="relative">
            <Image className="rounded-full w-80 h-80 mx-auto border border-red-500 shadow-xl object-cover object-top" src={ProfessionalImage} alt="Rabby Hasan" />
            <div className="bg-white dark:bg-gray-800 mt-12 py-8 px-6 border rounded-lg shadow-lg transition duration-500">
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                    Hi, I am <span className="text-red-500">Rabby Hasan</span>, <br />
                    a <span><TypeAnimationWrapper /></span>
                </h1>
                <div className="  bg-white  dark:bg-gray-800">

                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                        I am a full-stack web developer and am currently working with web development and learning continuously. I am skilled in JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, and MongoDB.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                        I’m passionate about creating software products and tools that improve workflows and enhance user experiences. With expertise in both front-end and back-end development, I create scalable and efficient solutions. I stay updated with the latest web technologies to ensure my work is innovative and effective. My goal is to help businesses succeed with reliable software tools.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Specializations:</h3>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                        <li>React.js Developer</li>
                        <li>Next.js Developer</li>
                        <li>MERN Stack Developer</li>
                        <li>Front-End & Back-End Web Developer</li>
                        <li>Full Stack Developer</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;