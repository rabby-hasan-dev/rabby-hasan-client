'use client'

import { IProject } from "@/src/types/project.types";
import { ProjectHeader } from "../_components/ProjectHeaders";


const ProjectDetailsPage: React.FC<{ project: IProject }> = ({ project }) => (
    <div className="container mx-auto px-4 py-10">
        <ProjectHeader project={project} />
        <ProjectDescription description={project.description} />
        <ProjectTechAndTags technologies={project.technologies} tags={project.tags} />
        <ProjectLinks
            githubRepoClient={project.githubRepoClient}
            githubRepoServer={project.githubRepoServer}
            liveDemo={project.liveDemo}
        />
        <ProjectCollaborators collaborators={project.collaborators} />
        <ProjectFeatures features={project.Features} />
        <ProjectTestimonials testimonials={project.testimonials} />
        <ProjectGallery images={project.images} />
        <ProjectVotesAndViews upvote={project.upvote} downvote={project.downvote} views={project.views} />
    </div>
);
