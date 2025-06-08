import { SidebarHeader } from '../../components/molecules/SidebarHeader';
import { SidebarRecentlyUsedFiles } from '../../components/molecules/SidebarRecentlyUsedFiles'
import styles from './Sidebar.module.css';

export const Sidebar = () => {
    const companyName = 'XXX株式会社'

    return (
        <aside className={styles.sidebar}>
            <SidebarHeader companyName={companyName} />
            <SidebarRecentlyUsedFiles name="最近使ったファイル" path="/recent" />
        </aside>
    );
};