'use server'

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



export const getAllProjects = async () => {

    try {
        const { data } = await axiosInstance.get('/projects');
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