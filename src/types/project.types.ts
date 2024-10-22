

export interface IProject {
    _id: string;
    title: string;
    description: string;
    technologies: string[];
    githubRepoClient: string;
    githubRepoServer: string;
    liveDemo?: string;
    category?: string;
    author: string;
    images?: string[];
    client?: string;
    testimonials: string[];
    startDate: Date;
    endDate?: Date;
    upvote: number;
    downvote: number;
    tags: string[];
    collaborators: string;
    views: number;
    isFeatured: boolean;
    isDeleted: boolean
}