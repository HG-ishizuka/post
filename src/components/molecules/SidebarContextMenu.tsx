import { Button } from '../atoms/Button';
import styles from './ContextMenu.module.css';

type SidebarContextMenuProps = {
    onAddUser: () => void;
    onEditCabinetName: () => void;
    onUserList: () => void;
    onHideCabinet: () => void;
};

export const ContextMenu = ({
    onAddUser,
    onEditCabinetName,
    onUserList,
    onHideCabinet,
}: SidebarContextMenuProps) => {
    return (
        <div className={styles.menuContainer}>
            <Button className={styles.menuItem} onClick={onAddUser}>
                利用者を追加
            </Button>
            <Button className={styles.menuItem} onClick={onEditCabinetName}>
                キャビネット名を編集
            </Button>
            <Button className={styles.menuItem} onClick={onUserList}>
                利用者一覧
            </Button>
            <Button className={styles.menuItem} onClick={onHideCabinet}>
                キャビネットを非表示
            </Button>
        </div>
    );
};
