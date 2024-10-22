const ProjectVotesAndViews: React.FC<{ upvote: number, downvote: number, views: number }> = ({ upvote, downvote, views }) => (
    <div className="flex space-x-6 text-gray-600">
        <p>👍 {upvote}</p>
        <p>👎 {downvote}</p>
        <p>👁️ {views} Views</p>
    </div>
);
