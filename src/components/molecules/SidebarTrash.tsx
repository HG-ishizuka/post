import { Link as RouterLink } from 'react-router-dom';
import styles from './SidebarTrash.module.css';

type SidebarTrashProps = {
    name: string;
    path: string;
    onClick?: () => void;
};

export const SidebarTrash = ({ name, path, onClick }: SidebarTrashProps) => {
    return (
        <div className={styles.trash}>
            <RouterLink to={path} onClick={onClick}>
                {name}
            </RouterLink>
        </div>
    );
};
