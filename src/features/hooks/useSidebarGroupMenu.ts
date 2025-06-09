import { useState } from 'react';

export const useSidebarGroupMenu = () => {
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

    const handleToggleMenu = (index: number, e: React.MouseEvent) => {
        e.stopPropagation();
        setOpenMenuIndex((prev) => (prev === index ? null : index));
    };

    return { openMenuIndex, handleToggleMenu };
};
