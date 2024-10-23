import { Skeleton } from "@nextui-org/skeleton";


const SkeletonCard = () => {
    return (
        <>
            <Skeleton className="w-full h-full object-cover scale-125 -translate-y-6" />
            <div className="absolute z-10 top-1 flex flex-col items-start p-4 space-y-1">
                <Skeleton className="w-1/2 h-4 bg-gray-300" /> {/* For the subtitle */}
                <Skeleton className="w-3/4 h-6 bg-gray-300" /> {/* For the title */}
            </div>
            <div className="absolute bg-white/30 dark:bg-gray-800/80 bottom-0 border-t border-zinc-100/50 z-10 flex justify-between items-center w-full p-4">
                <div>
                    <Skeleton className="w-1/2 h-4 bg-gray-300" /> {/* For availability text */}
                    <Skeleton className="w-1/2 h-4 bg-gray-300" /> {/* For notification text */}
                </div>
                <Skeleton className="w-20 h-8 bg-blue-500 rounded-full" /> {/* For button */}
            </div>
        </>
    );
};

export default SkeletonCard;