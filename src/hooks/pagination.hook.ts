import { useState } from "react";

export const usePagination = (initialPage = 1,) => {
    const [page, setPage] = useState(initialPage);

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };

    return { page, handlePageChange };
};