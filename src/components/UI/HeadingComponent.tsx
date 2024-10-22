import React from 'react';

const HeadingComponent = ({ heading, subHeading }: { heading: string, subHeading: string }) => {
    return (
        <div>
            <h4 className="uppercase text-xl text-center text-gray-600 dark:text-gray-300">
                {subHeading}
            </h4>
            <h2 className="text-5xl my-8 font-semibold text-center text-gray-800 dark:text-gray-100">
                {heading}
            </h2>
        </div>
    );
};

export default HeadingComponent;