import React from 'react';
import styles from './ConfirmationModal.module.css';

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <p>¿Estás seguro de que quieres eliminar este proyecto?</p>
                <button onClick={onClose}>Cancelar</button>
                <button onClick={onConfirm}>Confirmar</button>
            </div>
        </div>
    );
};

export default ConfirmationModal;

