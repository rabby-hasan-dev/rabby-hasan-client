
"use client";

import React from "react";

import { useGetProject } from "@/src/hooks/Project.hooks";
import { usePagination } from "@/src/hooks/pagination.hook";
import { useDebouncedSearch } from "@/src/hooks/Debounce.hooks";
import MainTable from "@/src/components/Table/MainTable";



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

    const { data } = useGetProject({
        searchTerm: debouncedValue,
        page,
    });

    const projects = data?.data || [];
    const metadata = data?.meta || {};
    const totalPage = metadata?.totalPage;



    const handleAddProject = () => {
        console.log("Add new project");
    };



    return (
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
            onAddProject={handleAddProject}
        />
    );
}


















