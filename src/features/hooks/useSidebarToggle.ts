import { useState } from "react";

export const useSidebarToggle = () => {
    // 折りたたみ状態 (isCollapsed) を管理するためのstateを作成
    const [isCollapse, setIsCollapse] = useState(false);

    const toggleSidebar = () => {
        // 今の状態を反転（trueならfalse、falseならtrue）して更新
        setIsCollapse(prev => !prev);
    }

    return {isCollapse, toggleSidebar};
};