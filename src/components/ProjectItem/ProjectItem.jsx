import React, { useState } from 'react';
import styles from './ProjectItem.module.css';

const ProjectItem = ({ project, onEdit, onDelete }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <tr className={styles.projectItem}>
            <td>{project.name}</td>
            <td>{project.projectManager}</td>
            <td>{project.assignedTo}</td>
            <td>{project.status}</td>
            <td>
                <button onClick={() => setShowDropdown(!showDropdown)}>⋮</button>
                {showDropdown && (
                    <div className={styles.dropdown}>
                        <button onClick={() => onEdit(project.id)}>Edit</button>
                        <button onClick={() => onDelete(project.id)}>Delete</button>
                    </div>
                )}
            </td>
        </tr>
    );
};

export default ProjectItem;

