import Modal from 'react-modal';
import styles from './modal.module.css';

Modal.setAppElement('#root');

type Props = {
    isOpen: boolean;
    className?: string;
    onClose: () => void;
    companyName: string; 
};

export const CompanySwitchModal = ({ isOpen, onClose, companyName }: Props) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} className={styles.modal} overlayClassName={styles.overlay}>
            <p>{companyName}</p>
            <button onClick={onClose}>×</button>
        </Modal>
    );
};
