import HeadingComponent from "@/src/components/UI/HeadingComponent";
import { FaBookReader, FaCameraRetro, FaCode, FaCubes, FaMusic, FaTrain } from "react-icons/fa";

const InterestSection = () => {

    const interests = [
        { name: 'Coding', icon: <FaCode /> },
        { name: 'Reading', icon: <FaBookReader /> },
        { name: 'Traveling', icon: <FaTrain /> },
        { name: 'Photography', icon: <FaCameraRetro /> },
        { name: 'Learning New Technologies', icon: <FaCubes /> },
        { name: 'Listening to Songs', icon: <FaMusic /> },
    ];
    return (
        <div className="my-12">

            <HeadingComponent heading=' My Interests' subHeading='Interests' />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Interest Cards */}
                {interests.map((interest, idx) => (
                    <div key={idx} className="flex items-center p-4 bg-blue-50 dark:bg-gray-700 rounded-lg shadow-lg transition duration-300 hover:bg-blue-100 dark:hover:bg-gray-600">
                        {interest.icon} {/* Icon */}
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 ml-4">{interest.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InterestSection;