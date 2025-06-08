import { useState } from 'react';
import { Link as CompanyLink } from '../atoms/Link';
import { Button as HomeButton } from '../atoms/Button';
import { CompanySwitchModal } from '../atoms/Modal';
import styles from './SidebarHeader.module.css';

type SidebarHeaderProps = {
    companyName: string;
    className?: string;
};

export const SidebarHeader = ({ companyName }: SidebarHeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.SidebarHeader}>
            
            {/* 会社名をトリガーに CompanySwitchModal を起動させる */}
            <CompanyLink to="#" className={styles.companyName} onClick={() => setIsOpen(true)}>
                {companyName}
            </CompanyLink>
            <HomeButton className={styles.homeButton}>
                ホーム
            </HomeButton>

            <CompanySwitchModal isOpen={isOpen} onClose={() => setIsOpen(false)} companyName={companyName} />
        </div>
    );
};