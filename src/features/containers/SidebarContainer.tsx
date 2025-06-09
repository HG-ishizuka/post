import { useState } from 'react';
import { Sidebar } from '../components/Sidebar';

export const SidebarContainer = () => {
    // 現在選択されているグループ名の状態を管理
    const [selectedGroup, setSelectedGroup] = useState('');
    // 現在選択されている部門名の状態を管理
    const [selectedDepartment, setSelectedDepartment] = useState('');

    // 選択された場合に各グループ名、部門名をセットする
    const handleSelect = (group: string, department: string) => {
        setSelectedGroup(group);
        setSelectedDepartment(department);
    };

    return (
        <Sidebar
            selectedGroup={selectedGroup}
            selectedDepartment={selectedDepartment}
            onSelect={handleSelect}
        />
    );
};
