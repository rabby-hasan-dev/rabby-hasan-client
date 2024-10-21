import { useMutation, useQuery } from "@tanstack/react-query"
import { createProject, deleteSingleProject, getAllProjects, getSingleProject, updateProject } from "../services/projects"

interface MutationVariables {
    projectId: string;
    projectData: FormData;
}





export const useGetProject = () => {

    return useQuery<any, Error, any, string[]>({
        queryKey: ["GET_PROJECT"],
        queryFn: async () => await getAllProjects(),

    })
}


export const useGetSingleProject = (projectId: string) => {

    return useQuery<any, Error, any, string[]>({
        queryKey: ["GET_PROJECT"],
        queryFn: async () => await getSingleProject(projectId),

    })
}



export const useCreateProject = () => {

    return useMutation<any, Error, FormData>({
        mutationKey: ["CREATE_PROJECT"],
        mutationFn: async (projectData) => await createProject(projectData),
    })

}

export const useUpdateProject = () => {

    return useMutation<any, Error, MutationVariables>({
        mutationKey: ["UPDATE_PROJECT"],
        mutationFn: async ({ projectId, projectData }) => await updateProject(projectId, projectData),
    })

}


export const useDeleteProject = () => {

    return useMutation<any, Error, string>({
        mutationKey: ["UPDATE_PROJECT"],
        mutationFn: async (projectId) => await deleteSingleProject(projectId),
    })

}