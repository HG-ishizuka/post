import { useState } from 'react';

export const useSidebarGroup = () => {
    // Setを使って、開いているグループのインデックス（番号）を記録する
    const [openState, setOpenState] = useState<Set<number>>(new Set());

    // グループを開閉する関数
    const toggleGroup = (index: number) => {
        // 現在の開いているグループの状態（prev）を元に新しい状態を作る
        setOpenState(prev => {
            const newState = new Set(prev);

            if (newState.has(index)) {
                 // 既に開いている場合は閉じる（Setから削除）
                newState.delete(index)
            } else {
                // 閉じている場合は開く（Setに追加）
                newState.add(index);
            }

            return newState;
        });
    };

    // 開いているグループの状態と、開閉用の関数を返す
    return {openState, toggleGroup};
};