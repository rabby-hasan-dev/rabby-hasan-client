import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createProject, deleteSingleProject, getAllProjects, getSingleProject, updateProject } from "../services/projects"

interface MutationVariables {
    projectId: string;
    projectData: FormData;
}



// keepPreviousData: true, // Ensure old data is available during re-fetch

export const useGetProject = ({ searchTerm, page }: { searchTerm: string; page: number }) => {
    // Ensure to use the correct type for the return of useQuery
    return useQuery<any, Error>({
        queryKey: ["GET_PROJECT", searchTerm, page], // Unique key for the query
        queryFn: async () => getAllProjects(searchTerm, page), // Fetching function
        staleTime: 3000, // Keep data fresh for 5 seconds   
        refetchOnWindowFocus: false, // Prevent refetching on window focus

    });
};


export const useGetSingleProject = (projectId: string) => {

    return useQuery<any, Error, any, string[]>({
        queryKey: ["GET_SINGLE_PROJECT"],
        queryFn: async () => await getSingleProject(projectId),

    })
}



export const useCreateProject = () => {
    const queryClient = useQueryClient()
    return useMutation<any, Error, FormData>({
        mutationKey: ["CREATE_PROJECT"],
        mutationFn: async (projectData) => await createProject(projectData),
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ["GET_PROJECT"] })
        },
    })

}

export const useUpdateProject = () => {
    const queryClient = useQueryClient()
    return useMutation<any, Error, MutationVariables>({
        mutationKey: ["UPDATE_PROJECT"],
        mutationFn: async ({ projectId, projectData }) => await updateProject(projectId, projectData),
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ["GET_PROJECT"] })
            queryClient.invalidateQueries({ queryKey: ["GET_SINGLE_PROJECT"] })
        },
    })

}


export const useDeleteProject = () => {
    const queryClient = useQueryClient()
    return useMutation<any, Error, string>({
        mutationKey: ["DELETE_PROJECT"],
        mutationFn: async (projectId) => await deleteSingleProject(projectId),
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ["GET_PROJECT"] })
            queryClient.invalidateQueries({ queryKey: ["GET_SINGLE_PROJECT"] })
        },
    })

}


