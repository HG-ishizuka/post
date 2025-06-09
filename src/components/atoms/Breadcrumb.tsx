import styles from './Breadcrumb.module.css';

type BreadcrumbProps = {
    group: string;
    department: string;
};

export const Breadcrumb = ({ group, department}: BreadcrumbProps) => {
    return (
        <div className={styles.breadcrumb}>
            <span className={styles.group}>{group}</span>
            <span className={styles.separator}>{'>'}</span>
            <span className={styles.department}>{department}</span>
        </div>
    );
};