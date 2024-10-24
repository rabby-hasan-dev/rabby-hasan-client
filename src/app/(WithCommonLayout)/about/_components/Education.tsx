import HeadingComponent from "@/src/components/UI/HeadingComponent";
import Link from "next/link";

const Education = () => {

    const educations = [
        {
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpFNN3Uc0M91olGk02SquO98YLOOK7AC-Xzw&s',
            degree: 'Bachelor of Social Science in Economics',
            institution: ' National University ',
            graduationYear: '2021 to running ..',
            details: 'Relevant Courses: microeconomics, macroeconomics, econometrics, statistics, and mathematical economics',
            certificationLink: '',
        },
        {
            logo: 'https://content.easy.jobs/assets/112460/company_logo.png',
            degree: 'Web Development Courses',
            institution: 'Programming Hero',
            graduationYear: 'Batch-7 level-1 in 2023',
            details: 'Skills Acquired: HTML, CSS,TailwindCss,Bootstrap ,JavaScript, React, Express.js,MongoDB more etc',
            certificationLink: 'https://drive.google.com/file/d/1cvFe5z1-TuwHkSaNMA-Y4MjbAWQY5idt/view?usp=drive_link',
        },
        // Add more education data as needed
    ];




    return (
        <section className="mb-12">
            <HeadingComponent heading="My Educations" subHeading="Education" />
            <div className="space-y-6">
                {educations.map((education, index) => (
                    <div
                        key={index}
                        className=" p-6 border rounded-lg hover:shadow-lg transition-shadow duration-300 flex items-center space-x-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                    >
                        <img
                            src={education.logo}
                            alt={`${education.institution} Logo`}
                            className="w-16 h-16 rounded-full"
                        />
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                {education.degree}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                {education.institution}, Graduated: {education.graduationYear}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">{education.details}</p>
                            {education.certificationLink && (
                                <p className="text-gray-600 dark:text-gray-400">
                                    <Link
                                        href={education.certificationLink}
                                        className="text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        View Certification
                                    </Link>
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;