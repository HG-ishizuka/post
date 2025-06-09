import { useState } from 'react';
import { Sidebar } from '../features/components/Sidebar';
import { Header } from '../features/components/Header';
import styles from './HomePage.module.css';

export default function HomePage() {
    const [selectedGroup, setSelectedGroup] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');

    const handleSelect = (group: string, department: string) => {
        setSelectedGroup(group);
        setSelectedDepartment(department);
    };

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <Sidebar selectedGroup={selectedGroup} selectedDepartment={selectedDepartment} onSelect={handleSelect}/>
            </div>
            <div className={styles.mainArea}>
                <div className={styles.header}>
                    <Header group={selectedGroup} department={selectedDepartment} />
                </div>
                <main className={styles.main}>
                    {/* Mainコンテンツ */}
                </main>
            </div>
        </div>
    );
}
