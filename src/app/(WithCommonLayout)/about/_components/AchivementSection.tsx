import HeadingComponent from '@/src/components/UI/HeadingComponent';
import { Image } from '@nextui-org/image';


const AchivementSection = () => {

    const achievements = [
        {
            "title": "Best Web Developer Award 2023",
            "description": "Recognized for outstanding web development skills.",
            "date": "2023-08-12",
            "imageUrl": ["https://www.shutterstock.com/image-photo/success-teamwork-joint-achievement-goal-260nw-2265726729.jpg"],
            "icon": "🏆"
        },
        {
            "title": "Top Contributor in Open Source",
            "description": "Contributed to multiple high-impact projects.",
            "date": "2022-05-20",
            "imageUrl": ["https://media.istockphoto.com/id/1347499538/photo/close-up-low-angle-view-group-of-star-shape-crystal-trophy.jpg?s=612x612&w=0&k=20&c=P89S286u-3aNijnUjVwlIZCE71FS6Sv6vnkWQyPLrhY="],
            "icon": "🌟"
        },
        {
            "title": "Hackathon Winner",
            "description": "Secured 1st place in a regional hackathon.",
            "date": "2021-09-15",
            "imageUrl": ["https://www.shutterstock.com/image-photo/success-teamwork-joint-achievement-goal-260nw-2265726729.jpg"],
            "icon": "🥇"
        }
    ]


    return (
        <section className="mb-12">
            <HeadingComponent heading="My Achievements" subHeading="Achievement" />
            <ul className="space-y-6">
                {achievements?.map((achievement, index) => (
                    <li
                        key={index}
                        className={`relative flex items-center p-6 border-l-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gradient-to-r from-gray-100 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 hover:bg-opacity-80 hover:border-opacity-80 hover:border-l-8 hover:border-gradient-to-r ${achievement.title.includes("Winner")
                            ? "border-red-500 hover:border-red-400"
                            : achievement.title.includes("Contributor")
                                ? "border-green-500 hover:border-green-400"
                                : "border-blue-500 hover:border-blue-400"
                            }`}
                    >
                        {/* Animated Icons */}
                        <span className={`mr-4 text-5xl transform hover:scale-110 transition-transform duration-300`}>
                            {achievement.icon} {/* Use the dynamic icon from the data */}
                        </span>
                        <div className="flex-grow">
                            {/* Achievement Title */}
                            <h3 className="font-bold text-xl mb-1">{achievement.title}</h3>

                            {/* Achievement Description */}
                            <p className="text-gray-600 dark:text-gray-300 mb-2">
                                {achievement.description}
                            </p>

                            {/* Achievement Image (Optional) */}
                            {achievement?.imageUrl && achievement.imageUrl.length > 0 && (
                                <div className="relative overflow-hidden rounded-lg mt-3 w-36 h-36">
                                    <Image
                                        src={achievement.imageUrl[0]} // assuming the first image
                                        alt={`${achievement.title} image`}
                                        className="rounded-lg w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            )}

                            {/* Achievement Date Tag */}
                            <span className="inline-block mt-4 px-3 py-1 text-xs font-medium tracking-wide uppercase text-white bg-blue-600 dark:bg-blue-500 rounded-full">
                                {new Date(achievement.date).toLocaleDateString()}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default AchivementSection;