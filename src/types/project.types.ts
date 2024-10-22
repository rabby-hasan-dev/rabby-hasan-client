import { IUser } from ".";


export interface IProject {
    _id: string;
    title: string;
    description: string;
    technologies: string[];
    githubRepoClient: string;
    githubRepoServer: string;
    liveDemo?: string;
    category?: string;
    author: IUser;
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
    Features: string[];
    isDeleted: boolean
}