
"use client";

import React, { useEffect } from "react";

import { useDeleteProject, useGetProject } from "@/src/hooks/Project.hooks";
import { usePagination } from "@/src/hooks/pagination.hook";
import { useDebouncedSearch } from "@/src/hooks/Debounce.hooks";
import MainTable from "@/src/components/Table/MainTable";
import { toast } from "sonner";



const columns = [

    {
        key: "title",
        label: "Title",
    },

    {
        key: "startDate",
        label: "Start Date",
    },
    {
        key: "endDate",
        label: "End Date",
    },
    {
        key: "actions",
        label: "Actions",
    },
];




export default function ProjectManagement() {
    const { filterValue, setFilterValue, debouncedValue, onSearchChange } = useDebouncedSearch();
    const { page, handlePageChange } = usePagination();
    const { mutate: deleteProject, data: deleteData, isSuccess } = useDeleteProject();

    const { data } = useGetProject({
        searchTerm: debouncedValue,
        page,
    });

    const projects = data?.data || [];
    const metadata = data?.meta || {};
    const totalPage = metadata?.totalPage;



    const handleDeleteProject = (id: string) => {
        console.log("Add new project", id);
        const res = deleteProject(id);
        console.log(res);



    };

    useEffect(() => {
        if (deleteData && deleteData?.success) {
            toast.success(deleteData?.message as string);
        }
        if (deleteData && !deleteData?.success) {
            toast.error(deleteData?.message as string);
        }

    }, [isSuccess, deleteData,]);



    return (
        <div >

            <MainTable

                columns={columns}
                data={projects}
                totalData={metadata?.total}
                filterValue={filterValue}
                setFilterValue={setFilterValue}
                onSearchChange={onSearchChange}
                page={page}
                totalPages={totalPage}
                handlePageChange={handlePageChange}
                onDeleteProject={handleDeleteProject}
            />
        </div>
    );
}


















