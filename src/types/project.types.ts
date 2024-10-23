import { IUser } from ".";



export interface ITestimonial {
    name: string;
    position: string;
    company?: string;
    message: string;
    images?: string[];
    isDeleted: boolean;
}



export interface ITechnology {
    name: string;
    category: string;
    iconUrl?: string;
    isDeleted: boolean;

}


export interface ICertification extends Document {
    name: string;
    issuingOrganization: string;
    issueDate: Date;
    expirationDate?: Date;
    credentialUrl?: string[];
    isDeleted: boolean
}


export interface IAchievement extends Document {
    title: string;
    description: string;
    date: Date;
    imageUrl?: string[];
    isDeleted: boolean;
}

export interface IClient extends Document {
    name: string;
    website?: string;
    contactEmail: string;
    projects: IProject[];
    isDeleted: boolean;

}


// Define Experience Interface
export interface IExperience extends Document {
    position: string;
    company: string;
    companyWebsite?: string;
    startDate: Date;
    endDate?: Date;
    description: string;
    technologiesUsed: ITechnology[];
    isDeleted: boolean;
}


export interface IRating {
    userId: string;
    projectId: string;
    rating: number;
}

export interface IComment {
    _id?: string;
    userId: string;
    projectId: string;
    comment: string;
}

export interface IVote {
    user: string;
    projectId: string;
    value: number;
}




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
    client?: IClient;
    testimonials: ITestimonial[];
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