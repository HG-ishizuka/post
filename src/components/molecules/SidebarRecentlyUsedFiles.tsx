import { Link as RouterLink } from 'react-router-dom';

type SidebarRecentlyUsedFilesProps = {
    name: string;
    path: string;
    className?: string;
    onClick?: () => void;
};

export const SidebarRecentlyUsedFiles = ({ name, path, className, onClick }: SidebarRecentlyUsedFilesProps) => {
    return (
        <RouterLink to={path} className={className} onClick={onClick}>
            {name}
        </RouterLink>
    );
};
