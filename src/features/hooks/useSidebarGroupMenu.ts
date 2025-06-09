import { useState } from 'react';

export const useSidebarGroupMenu = () => {
    // どのメニューが開いているかを保存する状態
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

    const handleToggleMenu = (index: number | null, e: React.MouseEvent) => {
        e.stopPropagation();
        setOpenMenuIndex((prev) => (prev === index ? null : index));
    };

    return { openMenuIndex, handleToggleMenu };
};
