import HeadingComponent from '@/src/components/UI/HeadingComponent';
import React from 'react';

const AchivementSection = () => {
    return (
        <section className="mb-12">

            <HeadingComponent heading=' My Achievements' subHeading=' Achievement' />
            <ul className="space-y-6">
                <li className="flex items-center p-4 border-l-4 border-blue-500 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <span className="mr-4 text-4xl text-yellow-500">🏆</span>
                    <div>
                        <h3 className="font-bold text-lg">Best Web Developer Award 2023</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Recognized for outstanding web development skills and innovative solutions.
                        </p>
                    </div>
                </li>
                <li className="flex items-center p-4 border-l-4 border-green-500 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <span className="mr-4 text-4xl text-green-500">🌟</span>
                    <div>
                        <h3 className="font-bold text-lg">Top Contributor in Open Source</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Contributed to multiple high-impact projects, enhancing community resources.
                        </p>
                    </div>
                </li>
                <li className="flex items-center p-4 border-l-4 border-red-500 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <span className="mr-4 text-4xl text-red-500">🥇</span>
                    <div>
                        <h3 className="font-bold text-lg">Hackathon Winner</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Secured 1st place in a regional hackathon with a groundbreaking project.
                        </p>
                    </div>
                </li>
                {/* Add more achievements as needed */}
            </ul>
        </section>
    );
};

export default AchivementSection;