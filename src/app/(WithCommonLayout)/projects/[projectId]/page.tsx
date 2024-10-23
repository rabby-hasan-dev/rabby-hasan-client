
'use client'

import { FaGithub, FaExternalLinkAlt, FaThumbsUp, FaThumbsDown, FaEye } from 'react-icons/fa';
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import { Card, CardBody } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import { useState } from "react";
import { Badge } from "@nextui-org/badge";
import { Image } from '@nextui-org/image';



function ProjectDetails({ params }: { params: any }) {

    const project = {
        _id: "1",
        title: "Next.js & Tailwind CSS Portfolio",
        description: "A modern portfolio website built with Next.js, Tailwind CSS, and Next UI. It showcases various personal and professional projects.",
        technologies: ["Next.js", "Tailwind CSS", "React", "Next UI", "Node.js", "Express", "MongoDB"],
        githubRepoClient: "https://github.com/user/portfolio-client",
        githubRepoServer: "https://github.com/user/portfolio-server",
        liveDemo: "https://next-portfolio-demo.vercel.app",
        category: "Web Development",
        author: {
            _id: "user1",
            name: "John Doe",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        images: [
            "https://via.placeholder.com/400",
            "https://via.placeholder.com/450",
        ],
        client: {
            name: "XYZ Company",
            website: "https://xyz-company.com",
        },
        testimonials: [
            {
                author: {
                    _id: "user2",
                    name: "Jane Smith",
                    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
                },
                feedback: "This project was well-executed and provided all the functionality we needed."
            },
            {
                author: {
                    _id: "user3",
                    name: "Michael Brown",
                    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
                },
                feedback: "Great job on the project! The user experience is excellent."
            },
        ],
        startDate: new Date("2023-05-01"),
        endDate: new Date("2023-09-01"),
        upvote: 250,
        downvote: 10,
        tags: ["Web Development", "Portfolio", "Frontend", "Backend"],
        collaborators: "Jane Smith, Michael Brown",
        views: 1200,
        features: [
            "Responsive design using Tailwind CSS",
            "Client-server architecture",
            "Optimized for performance and SEO",
            "Integrated with Next UI components",
            "Interactive and clean UI/UX"
        ],
        isDeleted: false,
    };



    const [upvotes, setUpvotes] = useState(project.upvote);
    const [downvotes, setDownvotes] = useState(project.downvote);

    const handleUpvote = () => setUpvotes(upvotes + 1);
    const handleDownvote = () => setDownvotes(downvotes + 1);

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Hero Section */}
            <section className="mb-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="w-full md:w-2/3">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">{project?.title}</h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">{project?.description}</p>
                        <div className="mt-4 flex flex-wrap gap-4">
                            {project?.liveDemo && (
                                <Button
                                    className="flex items-center"
                                    as="a"
                                    href={project.liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                                </Button>
                            )}
                            <Button
                                className="flex items-center"
                                as="a"
                                href={project.githubRepoClient}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub className="mr-2" /> GitHub Repo (Client)
                            </Button>
                            {project?.githubRepoServer && (
                                <Button
                                    className="flex items-center"
                                    as="a"
                                    href={project?.githubRepoServer}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub className="mr-2" /> GitHub Repo (Server)
                                </Button>
                            )}
                        </div>
                    </div>
                    {/* Upvotes/Downvotes/Views */}
                    <div className="flex items-center gap-6">
                        <Tooltip content="Upvote">
                            <button
                                onClick={handleUpvote}
                                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-500 transition"
                            >
                                <FaThumbsUp className="mr-1" /> {upvotes}
                            </button>
                        </Tooltip>
                        <Tooltip content="Downvote">
                            <button
                                onClick={handleDownvote}
                                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-red-500 transition"
                            >
                                <FaThumbsDown className="mr-1" /> {downvotes}
                            </button>
                        </Tooltip>
                        <Tooltip content="Views">
                            <span className="flex items-center text-gray-600 dark:text-gray-300">
                                <FaEye className="mr-1" /> {project?.views}
                            </span>
                        </Tooltip>
                    </div>
                </div>
            </section>

            {/* Project Gallery */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project?.images?.map((img, index) => (
                        <Card key={index} isHoverable className="dark:bg-gray-800">
                            <Image src={img} alt={`project-image-${index}`} />
                        </Card>
                    ))}
                </div>
            </section>

            {/* Project Information */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Project Information</h2>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full">
                        <p className="text-gray-600 dark:text-gray-300">
                            <strong>Technologies Used:</strong> {project?.technologies.join(', ')}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                            <strong>Start Date:</strong> {new Date(project?.startDate).toLocaleDateString()}
                        </p>
                        {project?.endDate && (
                            <p className="text-gray-600 dark:text-gray-300">
                                <strong>End Date:</strong> {new Date(project?.endDate).toLocaleDateString()}
                            </p>
                        )}
                    </div>
                    <div className="w-full">
                        <p className="text-gray-600 dark:text-gray-300">
                            <strong>Collaborators:</strong> {project?.collaborators}
                        </p>
                    </div>
                </div>
            </section>

            {/* Features & Tags */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Features</h2>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    {project?.features?.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <div className="mt-4 flex gap-2 flex-wrap">
                    {project.tags.map((tag, index) => (
                        <Badge key={index} variant="flat" color="primary">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Testimonials</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {project?.testimonials?.map((testimonial, index) => (
                        <Card key={index} isHoverable className="dark:bg-gray-800">
                            <CardBody>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">{testimonial?.feedback}</p>
                                <div className="flex items-center">
                                    <Avatar src={testimonial?.author?.avatar} />
                                    <p className="ml-4 text-gray-600 dark:text-gray-300">{testimonial?.author.name}</p>
                                </div>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </section>
        </div>

    );
}


export default ProjectDetails