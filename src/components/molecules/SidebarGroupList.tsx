import React from 'react';
import { Button } from '../atoms/Button';
import { Link } from '../atoms/Link';
import { ToggleIcon } from '../atoms/ToggleIcon';
import { ContextMenu as SidebarContextMenu } from './SidebarContextMenu';

import styles from './SidebarGroupList.module.css';

type SidebarGroupListProps = {
    name: string;
    links: { name: string; path: string }[];
    isOpen: boolean;
    onToggle: () => void;
    openMenuIndex: number | null;
    handleToggleMenu: (index: number | null, e: React.MouseEvent) => void;
};

export const SidebarGroupList = ({
    name,
    links,
    isOpen,
    onToggle,
    openMenuIndex,
    handleToggleMenu,
}: SidebarGroupListProps) => {
    return (
        <div>
            {/* グループタイトル部分（クリックで開閉） */}
            <div className={styles.sidebargroup} onClick={onToggle}>
                <ToggleIcon className={`${styles.toggleIcon} ${isOpen ? styles.open : styles.closed}`} />
                {name}
            </div>

            {/* グループが開いているときだけ、リンクリストを表示 */}
            <div className={`${styles.links} ${isOpen ? styles.linksOpen : ''}`}>
                {links.map((link, index) => (
                    <div key={link.path} className={styles.linkRow}>
                        <Link to={link.path} className={styles.link}>
                            <span>{link.name}</span>
                        </Link>
                        <div className={styles.menuContainer}>
                            <Button className={styles.menuContainer} onClick={(e) => handleToggleMenu(index, e)}>
                                ⋯
                            </Button>   

                            {openMenuIndex === index && (
                                <div className={styles.overlay} 
                                    onClick={(e) => {
                                        if (e.target === e.currentTarget) {
                                            handleToggleMenu(null, e);
                                        }
                                    }}
                                >
                                    <div className={styles.menuWrapper}>
                                        <SidebarContextMenu
                                            onAddUser={() => console.log(`${link.name} にユーザーを追加`)}
                                            onEditCabinetName={() => console.log(`${link.name} のキャビネット名を編集`)}
                                            onUserList={() => console.log(`${link.name} の利用者一覧を表示`)}
                                            onHideCabinet={() => console.log(`${link.name} のキャビネットを非表示`)}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
