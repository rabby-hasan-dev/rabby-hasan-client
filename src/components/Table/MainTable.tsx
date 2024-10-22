"use client";

import React, { useCallback, useMemo } from "react";
import { User } from "@nextui-org/user";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/table";
import { Tooltip } from "@nextui-org/tooltip";
import { Input } from "@nextui-org/input";
import { DeleteIcon, EditIcon, EyeIcon, SearchIcon } from "@/src/assets/icons";
import { Button } from "@nextui-org/button";
import { PlusIcon } from "lucide-react";
import { Pagination } from "@nextui-org/pagination";
import { IProject } from "@/src/types/project.types";


// Define the types for the props
interface ProjectTableProps {
    columns: { key: string; label: string }[];
    data: IProject[];
    totalData: number;
    filterValue: string;
    setFilterValue: (value: string) => void;
    onSearchChange: (value: string) => void;
    page: number;
    totalPages: number;
    handlePageChange: (page: number) => void;
    onAddProject: () => void;
}





export default function ProjectTable({
    columns,
    data,
    totalData,
    filterValue,
    setFilterValue,
    onSearchChange,
    page,
    totalPages,
    handlePageChange,
    onAddProject,
}: ProjectTableProps) {


    const topContent = useMemo(
        () => (
            <div className="flex flex-col gap-4">
                <div className="flex justify-center gap-3 items-center my-4">
                    <h2 className="text-4xl font-semibold">Projects Management</h2>
                </div>
                <div className="flex justify-between gap-3 items-end">
                    <Input
                        isClearable
                        classNames={{ base: "w-full sm:max-w-[44%]", inputWrapper: "border-1" }}
                        placeholder="Search by name..."
                        size="sm"
                        startContent={<SearchIcon className="text-default-300" />}
                        variant="bordered"
                        onClear={() => setFilterValue("")}
                        onValueChange={onSearchChange}
                    />
                    <div className="flex gap-3">
                        <Button className="bg-foreground text-background" endContent={<PlusIcon />} size="sm" onClick={onAddProject}>
                            Add Project
                        </Button>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-default-400 text-small">Total {totalData} Projects</span>
                </div>
            </div>
        ),
        [filterValue, totalData, onSearchChange, onAddProject]
    );

    const bottomContent = useMemo(
        () => (
            <div className="py-2 px-2 flex justify-between items-center">
                <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="primary"
                    page={page}
                    total={totalPages}
                    variant="light"
                    onChange={handlePageChange}
                />
            </div>
        ),
        [page, totalPages, handlePageChange]
    );


    const renderCell = useCallback(
        (project: any, columnKey: any) => {

            const cellValue = project[columnKey];

            switch (columnKey) {
                case "title":
                    return (
                        <User
                            avatarProps={{
                                radius: "full",
                                src: project?.images?.[0] || "/default-avatar.png",
                                size: "lg",
                                alt: `${project.title} Image`,
                            }}
                            name={project.title}
                            description={`${project?.description.slice(0, 40)} ...`}
                            className="text-left"
                        >
                            {/* Render additional project images (if any), or show a message */}
                            {project.images?.length > 1 ? (
                                <div className="flex gap-2 mt-2">
                                    {project?.images?.slice(1).map((image: any, index: number) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`Additional Image ${index + 1}`}
                                            className="w-10 h-10 object-cover rounded-md"
                                        />
                                    ))}
                                </div>
                            ) : (
                                <span className="text-sm text-default-500">No additional images</span>
                            )}
                        </User>
                    );

                case "actions":
                    return (
                        <div className="relative flex items-center gap-2">
                            <Tooltip content="Details">
                                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                    <EyeIcon />
                                </span>
                            </Tooltip>
                            <Tooltip content="Edit">
                                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                    <EditIcon />
                                </span>
                            </Tooltip>
                            <Tooltip color="danger" content="Delete">
                                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                    <DeleteIcon />
                                </span>
                            </Tooltip>
                        </div>
                    );
                default:
                    return cellValue;
            }
        },
        []
    );

    return (
        <Table
            topContent={topContent}
            bottomContent={bottomContent}
            aria-label="Project management table"
        // bottomContentPlacement="outside"
        // topContentPlacement="outside"
        >
            <TableHeader columns={columns}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={data}>
                {(item) => (
                    <TableRow key={item._id}>
                        {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
