'use client'

import React from 'react';
import contactLogo from '@/src/assets/Contact/hanshake.jpg'
import { Mail, Phone } from 'lucide-react';
import { FaMedium, } from 'react-icons/fa';
import contactBanner from '@/src/assets/Contact/contact.jpg'

import { Button } from '@nextui-org/button';
import { Input, Textarea } from '@nextui-org/input';

import Image from 'next/image';
import { FacebookIcon, GithubIcon, LinkedinIcon, TwitterIcon } from '@/src/assets/icons';

const ContactUs = () => {

  const socialIcons = [
    { Icon: TwitterIcon, link: 'https://twitter.com/yourprofile' },
    { Icon: LinkedinIcon, link: 'https://linkedin.com/in/yourprofile' },
    { Icon: GithubIcon, link: 'https://github.com/yourprofile' },
    { Icon: FacebookIcon, link: 'https://github.com/yourprofile' },
    { Icon: FaMedium, link: 'https://github.com/yourprofile' }
  ];






  return (


    <div className="container mx-auto p-6">

      <section className="relative bg-[url('@/src/assets/Contact/contact.jpg')] bg-no-repeat bg-cover flex flex-col items-center justify-center h-64 text-center text-white rounded-lg shadow-lg overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-50"></div>

        <div className="relative z-10">
          <h1 className="text-4xl font-bold drop-shadow-md">Get in Touch</h1>
          <p className="text-lg mt-2 drop-shadow-md">We’d love to hear from you!</p>
          <Button className="mt-4 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md transition duration-300" size="lg">Contact Me</Button>
        </div>
      </section>


      <section className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-gray-900">

        {/* Contact Card */}
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg transition-transform transform hover:scale-105 duration-300 p-6 flex flex-col items-center">
          <figure className="w-28 h-28 mb-4">
            <Image src={contactLogo} alt="ContactLogo" className="rounded-full shadow-lg" />
          </figure>
          <h2 className="font-bold text-2xl text-gray-800 dark:text-blue-400">Rabby Hasan</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-1 text-center">A reliable Web Developer.</p>
          <p className="mt-4 text-gray-500 dark:text-gray-400 text-center">I am available for Job and Web Development Services. Please connect with me.</p>
          <div className="mt-4 text-left w-full space-y-2">
            <p className="flex items-center text-gray-600 dark:text-gray-300">
              <Phone className="mr-2 text-blue-500" /> Phone: 01407950926
            </p>
            <p className="flex items-center text-gray-600 dark:text-gray-300">
              <Mail className="mr-2 text-blue-500" /> Email: rabbyhasan6530@gmail.com
            </p>
          </div>

          {/* Social Links */}
          <div className='my-4 w-full'>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Find Me</h3>
            <div className="flex justify-center space-x-4 flex-wrap">
              {socialIcons.map(({ Icon, link }, idx) => (
                <a href={link} key={idx} target="_blank" rel="noopener noreferrer">
                  <button className="p-4 text-3xl bg-white dark:bg-gray-700 hover:bg-blue-200 dark:hover:bg-blue-600 rounded-full shadow-lg transform hover:scale-110 transition duration-300">
                    <Icon />
                  </button>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form className="contact-form mt-6 p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg transition-transform transform hover:scale-105 duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Send Me Email</h2>
            <Input label="Your Name" className="mt-4" fullWidth />
            <Input label="Your Email" type="email" className="mt-4" fullWidth />
            <Input label="Subject" className="mt-4" placeholder="General Inquiry" fullWidth />
            <Textarea label="Your Message" className="mt-4" rows={4} fullWidth />
            <Button type="submit" className="mt-4 w-full bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 transition duration-300" size="lg">
              Send Message
            </Button>
          </form>
        </div>

      </section>




    </div>




  );
};

export default ContactUs;
