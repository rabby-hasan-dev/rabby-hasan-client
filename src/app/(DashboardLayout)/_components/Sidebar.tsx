'use client'

import { BrainCogIcon, CogIcon, HomeIcon, LogOutIcon, MonitorCheckIcon, NotebookTextIcon, Settings2, TrophyIcon, User2Icon } from "lucide-react";
import Link from "next/link";



const Sidebar = () => {
    return (
        <div className="flex flex-col h-full">
            {/* Logo or Brand */}
            <div className="flex items-center justify-center h-16 bg-gray-800">
                <Link href="/" >
                    <h1 className="text-lg font-bold">Rabby Hasan</h1>
                </Link>

            </div>


            {/* Sidebar Links */}
            <nav className="flex flex-col flex-grow mt-4 space-y-2">
                <Link href="/dashboard" className="flex items-center px-4 py-2 text-sm font-medium text-white transition bg-gray-800 hover:bg-gray-700">
                    <HomeIcon className="w-5 h-5 mr-3" /> Home
                </Link>
                <Link href="/dashboard/#users" className="flex items-center px-4 py-2 text-sm font-medium text-white transition bg-gray-800 hover:bg-gray-700">
                    <User2Icon className="w-5 h-5 mr-3" /> Users
                </Link>
                <Link href="/dashboard/#skills" className="flex items-center px-4 py-2 text-sm font-medium text-white transition bg-gray-800 hover:bg-gray-700">
                    <BrainCogIcon className="w-5 h-5 mr-3" /> Skills
                </Link>
                <Link href="/dashboard/#achivement" className="flex items-center px-4 py-2 text-sm font-medium text-white transition bg-gray-800 hover:bg-gray-700">
                    <TrophyIcon className="w-5 h-5 mr-3" /> Achivement
                </Link>
                <Link href="/dashboard#" className="flex items-center px-4 py-2 text-sm font-medium text-white transition bg-gray-800 hover:bg-gray-700">
                    <CogIcon className="w-5 h-5 mr-3" /> Settings
                </Link>
                <Link href="/dashboard/#blog" className="flex items-center px-4 py-2 text-sm font-medium text-white transition bg-gray-800 hover:bg-gray-700">
                    <NotebookTextIcon className="w-5 h-5 mr-3" /> Blog
                </Link>
                <Link href="/dashboard/#experience" className="flex items-center px-4 py-2 text-sm font-medium text-white transition bg-gray-800 hover:bg-gray-700">
                    <Settings2 className="w-5 h-5 mr-3" /> Experience
                </Link>
                <Link href="/dashboard/projects" className="flex items-center px-4 py-2 text-sm font-medium text-white transition bg-gray-800 hover:bg-gray-700">
                    <MonitorCheckIcon className="w-5 h-5 mr-3" />Projects
                </Link>
            </nav>

            {/* Logout */}
            <div className="mt-auto">
                <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-red-400 hover:bg-gray-700 hover:text-white">
                    <LogOutIcon className="w-5 h-5 mr-3" /> Logout
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
