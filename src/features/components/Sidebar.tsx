import { SidebarHeader } from '../../components/molecules/SidebarHeader';
import { SidebarRecentlyUsedFiles } from '../../components/molecules/SidebarRecentlyUsedFiles';
import { SidebarGroupList } from '../../components/molecules/SidebarGroupList';
import { sidebarGroupListData} from '../data/SidebarGroupList'
import { useSidebarGroup } from '../hooks/useSidebarGroup';
import { SidebarUsageVolume } from '../../components/molecules/SidebarUsageVolume';
import { SidebarFooter } from '../../components/molecules/SidebarFooter';
import { useSidebarToggle } from '../hooks/useSidebarToggle';
import { useSidebarGroupMenu } from '../hooks/useSidebarGroupMenu';
import { SidebarTrash } from '../../components/molecules/SidebarTrash'
import styles from './Sidebar.module.css';

type SidebarProps = {
    selectedGroup: string;
    selectedDepartment: string;
    onSelect: (group: string, department: string) => void;
};

export const Sidebar = ({ onSelect }: SidebarProps) => {
    const companyName = 'XXX株式会社'
    // useSidebarフックで、現在開いているグループと、開閉を切り替える関数を取得
    const { openState, toggleGroup } = useSidebarGroup(); 
    // useSidebarToggleフックで、折りたたみ状態を切り替える関数を取得
    const { isCollapse, toggleSidebar } = useSidebarToggle();
    // useSidebarGroupMenuフックで、三点メニューの開閉を管理する関数を取得
    const { openMenuIndex, handleToggleMenu } = useSidebarGroupMenu();

    return (
        <div className={`${styles.wrapper} ${isCollapse ? styles.collapse : ''}`}>
            <div className={`${styles.content} ${isCollapse ? styles.hideOnCollapse : ''}`}>

                <SidebarHeader companyName={companyName} />
                <SidebarRecentlyUsedFiles name="最近使ったファイル" path="/recent"/>

                {/* sidebarDataのグループリストをループして、SidebarGroupを表示 */}
                {sidebarGroupListData.map((group, index) => (
                    // グループデータと開閉状態、切り替え操作をまとめて渡している。
                    <SidebarGroupList key={group.name} {...group} isOpen={openState.has(index)} onToggle={() => toggleGroup(index)} openMenuIndex={openMenuIndex} handleToggleMenu={handleToggleMenu} onSelect={onSelect}/>
                ))}

                <SidebarTrash name="ゴミ箱" path="/trash" />
                <SidebarUsageVolume usage='XXMB' />                

            </div>
                <SidebarFooter isCollapse={isCollapse} toggleSidebar={toggleSidebar} />
        </div>
    );
};