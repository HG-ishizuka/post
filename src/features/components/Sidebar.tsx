import { SidebarHeader } from '../../components/molecules/SidebarHeader';
import { SidebarRecentlyUsedFiles } from '../../components/molecules/SidebarRecentlyUsedFiles';
import { SidebarGroupList } from '../../components/molecules/SidebarGroupList';
import { sidebarGroupListData} from '../data/SidebarGroupList'
import { useSidebarGroup } from '../hooks/useSidebarGroup';
import styles from './Sidebar.module.css';

export const Sidebar = () => {
    const companyName = 'XXX株式会社'
    const { openState, toggleGroup } = useSidebarGroup(); 

    return (
        <aside className={styles.sidebar}>
            <SidebarHeader companyName={companyName} />
            <SidebarRecentlyUsedFiles name="最近使ったファイル" path="/recent" />

            {/* sidebarDataのグループリストをループして、SidebarGroupを表示 */}
            {sidebarGroupListData.map((group, index) => (
                // グループデータと開閉状態、切り替え操作をまとめて渡している。
                <SidebarGroupList key={group.name} {...group} isOpen={openState.has(index)} onToggle={() => toggleGroup(index)}/>
            ))}



        </aside>
    );
};