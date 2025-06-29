import { Link as RouterLink } from 'react-router-dom';
import styles from './SidebarRecentlyUsedFiles.module.css';

type SidebarRecentlyUsedFilesProps = {
    name: string;
    path: string;
    onClick?: () => void;
};

export const SidebarRecentlyUsedFiles = ({ name, path, onClick }: SidebarRecentlyUsedFilesProps) => {
    return (
        <div className={styles.recentlyUsedFiles}>
            <RouterLink to={path} onClick={onClick}>
                {name}
            </RouterLink>
        </div>
    );
};
