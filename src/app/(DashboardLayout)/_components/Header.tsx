
'use client'
import { Button } from "@nextui-org/button";
import { MenuIcon } from "lucide-react";



const Header = ({ toggleSidebar }: { toggleSidebar: any }) => {
    return (
        <header className=" sticky  top-0 bg-white  shadow p-4 flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                onClick={toggleSidebar}
            >

                <MenuIcon className="h-6 w-6 text-gray-700" />
            </button>

            {/* Page Title */}
            <h1 className="text-xl font-bold text-gray-700">Dashboard</h1>

            {/* Right-Side Actions */}
            <Button color="primary">
                Account
            </Button>
        </header>
    );
};

export default Header;
