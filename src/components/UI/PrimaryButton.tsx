import { Button } from '@nextui-org/button';
import React from 'react';

const PrimaryButton = ({ path, title }: { path: string, title: string }) => {
    return (
        <div className="flex justify-center">
            <Button
                as="a"
                href={`${path}`}
                className="px-8 py-4 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-lg transition duration-300 transform hover:scale-105"
            >
                {title}
            </Button>
        </div>
    );
};

export default PrimaryButton;