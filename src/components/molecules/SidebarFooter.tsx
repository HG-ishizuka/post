import { SidebarToggle } from '../atoms/Toggle';
import styles from './SidebarFooter.module.css';

type SidebarFooterProps = {
    isCollapse: boolean;
    toggleSidebar: () => void;
};

export const SidebarFooter = ({ isCollapse, toggleSidebar }: SidebarFooterProps) => {
    return (
        <div className={styles.footerWrapper}>

        {/* 折りたたみボタン */}
        <div className={styles.toggleWrapper}>
            <SidebarToggle onClick={toggleSidebar} isCollapse={isCollapse} />
        </div>
        </div>
    );
};
