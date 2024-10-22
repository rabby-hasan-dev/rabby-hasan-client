import React from 'react';

const VisionSection = () => {
    return (
        <div className="my-12">
            <h3 className="text-4xl font-extrabold text-gray-800 dark:text-gray-200 mb-6 animate__animated animate__fadeInDown">
                Vision
            </h3>
            <div className="relative p-8 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg transition duration-300 hover:shadow-xl transform hover:scale-105">
                <div className="relative z-10">
                    <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
                        My vision is to create a world where technology empowers individuals and communities to achieve their fullest potential.
                        Through innovative solutions and a user-centered approach, I aim to bridge the gap between digital and physical experiences,
                        fostering connection and accessibility for all.
                    </p>
                    <p className="text-md font-semibold text-gray-800 dark:text-gray-300">
                        "Empowering connections, inspiring change."
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VisionSection;