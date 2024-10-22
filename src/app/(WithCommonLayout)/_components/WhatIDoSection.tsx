
import Image from 'next/image';
import mernStack from '@/src/assets/what ido icon/MERN-Stack.png'
import frontEnd from '@/src/assets/what ido icon/Webdevelopment.png'
import backEnd from '@/src/assets/what ido icon/backend.jpg'
import HeadingComponent from '@/src/components/UI/HeadingComponent';


const WhatIdo = () => {
    return (
        <div className="my-16 mx-4">
            <HeadingComponent heading=' What I Do?' subHeading=' Features' />

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {/* Full Stack Development Card */}
                <div className="card bg-white dark:bg-gray-800 shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg overflow-hidden">
                    <div className="card-body flex flex-col items-center p-6">
                        <div className="avatar mb-4">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-red-500 dark:border-red-400">
                                <Image src={mernStack} className="object-cover w-full h-full" alt="MERN Stack" />
                            </div>
                        </div>
                        <h2 className="card-title text-2xl font-bold text-center text-gray-900 dark:text-gray-100">
                            Full / MERN Stack Development
                        </h2>
                        <p className="text-center text-gray-700 dark:text-gray-300 mt-2">
                            I am a full stack developer. I work on full stack development. If you want to build a full stack website, feel free to contact me.
                        </p>
                    </div>
                </div>

                {/* Front End Development Card */}
                <div className="card bg-white dark:bg-gray-800 shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg overflow-hidden">
                    <div className="card-body flex flex-col items-center p-6">
                        <div className="avatar mb-4">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500 dark:border-blue-400">
                                <Image src={frontEnd} className="object-cover w-full h-full" alt="Front End" />
                            </div>
                        </div>
                        <h2 className="card-title text-2xl font-bold text-center text-gray-900 dark:text-gray-100">
                            Front End Development
                        </h2>
                        <p className="text-center text-gray-700 dark:text-gray-300 mt-2">
                            I am a front-end developer. I specialize in creating interactive and responsive user interfaces. If you need assistance, don't hesitate to contact me.
                        </p>
                    </div>
                </div>

                {/* Back End Development Card */}
                <div className="card bg-white dark:bg-gray-800 shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg overflow-hidden">
                    <div className="card-body flex flex-col items-center p-6">
                        <div className="avatar mb-4">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-green-500 dark:border-green-400">
                                <Image src={backEnd} className="object-cover w-full h-full" alt="Back End" />
                            </div>
                        </div>
                        <h2 className="card-title text-2xl font-bold text-center text-gray-900 dark:text-gray-100">
                            Back End Development
                        </h2>
                        <p className="text-center text-gray-700 dark:text-gray-300 mt-2">
                            I am a back-end developer. I work on server-side applications and API integrations. If you need help building a back-end server, feel free to reach out.
                        </p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default WhatIdo;