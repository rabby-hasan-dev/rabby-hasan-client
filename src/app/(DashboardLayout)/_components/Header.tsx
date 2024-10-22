
'use client'
import { Button } from "@nextui-org/button";
import { MenuIcon } from "lucide-react";



const Header = ({ toggleSidebar }: { toggleSidebar: any }) => {
    return (

        <header className="sticky top-0 bg-white dark:bg-gray-800 shadow p-4 flex items-center justify-between transition-colors duration-500">
            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-gray-300"
                onClick={toggleSidebar}
            >
                <MenuIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </button>

            {/* Page Title */}
            <h1 className="text-xl font-bold text-gray-700 dark:text-gray-100">Dashboard</h1>

            {/* Right-Side Actions */}
            <Button className="text-gray-700 dark:text-gray-200 bg-primary dark:bg-primary-dark">
                Account
            </Button>
        </header>

    );
};

export default Header;
