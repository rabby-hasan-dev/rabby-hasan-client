import { useState, useEffect } from "react";

export const useDebouncedSearch = (delay = 300) => {
    const [filterValue, setFilterValue] = useState("");
    const [debouncedValue, setDebouncedValue] = useState(filterValue);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(filterValue);
        }, delay);

        return () => clearTimeout(handler);
    }, [filterValue, delay]);

    const onSearchChange = (value) => setFilterValue(value);

    return { filterValue, debouncedValue, setFilterValue, onSearchChange };
};
