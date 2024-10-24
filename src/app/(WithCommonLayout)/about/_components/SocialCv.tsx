import { FacebookIcon, GithubIcon, LinkedinIcon, TwitterIcon } from '@/src/assets/icons';
import { FilesIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { FaMedium } from "react-icons/fa6";

const SocialCv = () => {
    const socialIcons = [
        { Icon: TwitterIcon, link: 'https://x.com/rabby_hasan_dev' },
        { Icon: LinkedinIcon, link: 'https://www.linkedin.com/in/rabby-hasan-dev' },
        { Icon: GithubIcon, link: 'https://github.com/rabby-hasan-dev' },
        { Icon: FacebookIcon, link: 'https://www.facebook.com/rabbyhasandev' },
        { Icon: FaMedium, link: 'https://medium.com/@rabby-hasan' }
    ];
    return (
        <div className="mt-12 flex flex-col lg:flex-row lg:justify-around lg:items-center space-y-8 lg:space-y-0">
            {/* Social Links */}
            <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Connect With Me</h3>
                <div className="flex justify-center space-x-4">
                    {socialIcons?.map(({ Icon, link }, idx) => (
                        <Link href={link} key={idx} target="_blank" rel="noopener noreferrer">
                            <button className="p-4 text-3xl bg-white dark:bg-gray-700 hover:bg-blue-200 dark:hover:bg-blue-600 rounded-full shadow-lg transform hover:scale-110 transition duration-300">
                                <Icon />
                            </button>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Download CV */}
            <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Download My CV</h3>
                <Link href="https://drive.google.com/file/d/1m-18sCd82jnFhwsCC0oxOIOlHJ2Gxscc/view?usp=drive_link" className="inline-block size-24 ">
                    <button className=" p-4 text-2xl bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700 text-white rounded-full shadow-lg hover:bg-blue-500 dark:hover:bg-blue-600 hover:scale-105 transition duration-300">
                        <FilesIcon />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default SocialCv;