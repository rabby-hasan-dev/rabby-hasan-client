import { FacebookIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "@/src/assets/icons";
import Container from "./Container";
import { FaMedium } from "react-icons/fa6";

const Footer = () => {

    const socialIcons = [
        { Icon: TwitterIcon, link: 'https://x.com/rabby_hasan_dev' },
        { Icon: LinkedinIcon, link: 'https://www.linkedin.com/in/rabby-hasan-dev' },
        { Icon: GithubIcon, link: 'https://github.com/rabby-hasan-dev' },
        { Icon: FacebookIcon, link: 'https://www.facebook.com/rabbyhasandev' },
        { Icon: FaMedium, link: 'https://medium.com/@rabby-hasan' }
    ];

    return (

        <footer className="w-full flex items-center justify-center py-3 bg-gray-100 text-gray-800 shadow-md dark:bg-gray-800 dark:text-gray-200">
            <Container>

                <div className=" p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                    {/* Logo and Introduction */}
                    <div>
                        <div className="flex items-center mb-4">
                            <a className="avatar mr-4">
                                <div className="w-12 rounded-xl">
                                    {/* Uncomment and add your logo image */}
                                    {/* <img src={siteLogo} alt="Site Logo" /> */}
                                </div>
                            </a>
                            <p className="font-bold text-lg">Rabby Hasan</p>
                        </div>
                        <p className="text-sm">A reliable Web Developer with expertise in creating dynamic and responsive web applications.</p>
                        <p className="text-xs mt-2">Copyright © {new Date().getFullYear()} - By Rabby Hasan</p>
                    </div>

                    {/* Services Section */}
                    <div>
                        <span className="footer-title text-lg">Services</span>
                        <ul>
                            <li><a className="link link-hover text-sm hover:underline">Full Stack Development</a></li>
                            <li><a className="link link-hover text-sm hover:underline">Front End Development</a></li>
                            <li><a className="link link-hover text-sm hover:underline">Back End Development</a></li>
                        </ul>
                    </div>

                    {/* Info Section */}
                    <div>
                        <span className="footer-title text-lg">Info</span>
                        <ul>
                            <li><a className="link link-hover text-sm hover:underline">About Me</a></li>
                            <li><a className="link link-hover text-sm hover:underline">Contact</a></li>
                            <li><a className="link link-hover text-sm hover:underline">Jobs</a></li>
                        </ul>
                    </div>

                    {/* Social Links Section */}
                    <div className='my-4 w-full'>
                        <h3 className="text-lg font-semibold mb-4">Find Me</h3>
                        <div className="flex justify-center space-x-4 flex-wrap">
                            {socialIcons.map(({ Icon, link }, idx) => (
                                <a href={link} key={idx} target="_blank" rel="noopener noreferrer">
                                    <button className="p-4 text-3xl bg-gray-200 hover:bg-blue-200 dark:bg-gray-700 dark:hover:bg-blue-600 rounded-full shadow-lg transform hover:scale-110 transition duration-300">
                                        <Icon className="text-gray-800 dark:text-gray-200" />
                                    </button>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </Container>
        </footer>



    );
};

export default Footer;