
import ProfessionalImage from '@/src/assets/brandLogo/professional1.png'
import Image from 'next/image';
import TypeAnimationWrapper from '@/src/components/UI/TypeAnimation';
import { FacebookIcon, GithubIcon, LinkedinIcon, TwitterIcon } from '@/src/assets/icons';
import { FilesIcon } from 'lucide-react';

const IntroSection = () => {

    const socialLinks = [
        { icon: TwitterIcon, url: 'https://twitter.com/', name: 'Twitter' },
        { icon: LinkedinIcon, url: 'https://www.linkedin.com/in/rabby-hasan-dev/', name: 'LinkedIn' },
        { icon: GithubIcon, url: 'https://github.com/rabby-hasan-dev', name: 'GitHub' },
        { icon: FacebookIcon, url: 'https://facebook.com/rabby-hasan-dev', name: 'Facebook' },
    ];
    return (
        <div className="border-b-2 flex flex-col lg:flex-row-reverse justify-between items-center space-y-10 lg:space-y-0 lg:space-x-8">
            {/* Image Section */}
            <div className="lg:w-1/2 overflow-hidden flex justify-center">
                <Image
                    src={ProfessionalImage}
                    alt="Rabby Hasan"
                    className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Text Content Section */}
            <div className="lg:w-1/2 text-center lg:text-left space-y-8">
                <h5 className="uppercase tracking-wider text-gray-500 dark:text-gray-300">
                    Welcome to My World
                </h5>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                    Hi, I am{" "}
                    <span className="text-red-500 dark:text-red-400">Rabby Hasan</span>
                    <br />
                    a{" "}
                    <span>
                        <TypeAnimationWrapper />
                    </span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                    As a passionate and skilled web developer, my goal is to create immersive
                    and intuitive digital experiences that not only meet but exceed user
                    expectations.
                </p>

                <div>
                    <h3 className="uppercase font-semibold tracking-wide text-gray-600 dark:text-gray-400">
                        Find Me On
                    </h3>
                    <div className="flex justify-center lg:justify-start space-x-6 mt-4">
                        {socialLinks.map(({ icon: Icon, url, name }, idx) => (
                            <a
                                key={idx}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 text-2xl bg-slate-100 dark:bg-slate-800 text-gray-800 dark:text-gray-200 rounded-full shadow-md hover:scale-110 transition-transform duration-300 ease-in-out"
                                aria-label={name}
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>

                </div>
                {/* Download CV */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Download My Resume</h3>
                    <a href="https://drive.google.com/file/d/1m-18sCd82jnFhwsCC0oxOIOlHJ2Gxscc/view?usp=drive_link" className="inline-block">
                        <button className="p-4 text-2xl bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700 text-white rounded-full shadow-lg hover:bg-blue-500 dark:hover:bg-blue-600 hover:scale-105 transition duration-300">
                            <FilesIcon />
                        </button>
                    </a>
                </div>
            </div>
        </div>

    );
};

export default IntroSection;