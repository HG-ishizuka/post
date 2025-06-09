import { Link } from '../atoms/Link';
import { ToggleIcon } from '../atoms/ToggleIcon';
import styles from './SidebarGroupList.module.css';

type SidebarGroupListProps = {
    name: string;
    links: { name: string; path: string }[];
    isOpen: boolean;
    onToggle: () => void;
};

export const SidebarGroupList = ({ name, links, isOpen, onToggle }: SidebarGroupListProps) => {
    return (
        <div>
            {/* グループタイトル部分（クリックで開閉） */}
            <div className={styles.sidebargroup} onClick={onToggle}>
                {/* 開閉用アイコン：開いてるとき/閉じてるときでクラス切り替え */}
                <ToggleIcon className={`${styles.toggleIcon} ${isOpen ? styles.open : styles.closed}`} />
                {name}
            </div>

            {/* グループが開いているときだけ、リンクリストを表示 */}
            <div className={`${styles.links} ${isOpen ? styles.linksOpen : ''}`}>
                {links.map((link) => (
                    <Link key={link.path} to={link.path} className={styles.link}>
                        {link.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};