"use client"
import React, { ReactNode, useState } from "react";
import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";


const DashboardLayout = ({ children }: { children: ReactNode }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Function to toggle the sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar (Responsive) */}
            <aside
                className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-900 text-white p-6 transition-transform transform lg:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } md:relative md:translate-x-0 md:w-64 lg:w-64`}
            >
                <Sidebar />
            </aside>

            {/* Overlay for mobile to close the sidebar */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col w-full min-h-screen overflow-y-auto">
                {/* Header */}
                <Header toggleSidebar={toggleSidebar} />

                {/* Main Content */}
                <main className="p-6 bg-gray-100 dark:text-white min-h-full flex-1">
                    <div className="container mx-auto">{children}</div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
