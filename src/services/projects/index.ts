'use server'

import envConfig from "@/src/config/envConfig";
import axiosInstance from "@/src/lib/AxiosInstance";



export const createProject = async (projectData: FormData) => {

    try {
        const { data } = await axiosInstance.post('/projects', projectData);
        return data;
    } catch (error: any) {

        return {
            success: false,
            message: error.response.data.message,
        };

    }

}

export const updateProject = async (projectId: string, projectData: FormData) => {

    try {
        const { data } = await axiosInstance.put(`/projects/${projectId}`, projectData);
        return data;
    } catch (error: any) {

        return {
            success: false,
            message: error.response.data.message,
        };

    }

}

// { next: { tags: ['products'] } }

export const getAllProjects = async (searchTerm: string, page: number) => {


    try {
        const { data } = await axiosInstance.get('/projects', {
            params: {
                searchTerm,
                page,
                // sort: selectedSort,
            },

        });
        return data;
    } catch (error: any) {

        return {
            success: false,
            message: error.response.data.message,
        };

    }

}

export const getSingleProject = async (projectId: string) => {

    try {
        const { data } = await axiosInstance.get(`/projects/${projectId}`);
        return data;
    } catch (error: any) {

        return {
            success: false,
            message: error.response.data.message,
        };

    }

}

export const deleteSingleProject = async (projectId: string) => {

    try {
        const { data } = await axiosInstance.delete(`/projects/${projectId}`);
        return data;
    } catch (error: any) {

        return {
            success: false,
            message: error.response.data.message,
        };

    }

}

//  without authentication all project api

export const FeedProjects = async () => {

    const res = await fetch(`${envConfig.baseApi}/projects`)
    return res.json();

}


