import React, { useState } from 'react';
import styles from './ProjectItem.module.css';

const ProjectItem = ({ project, onEdit, onDelete }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className={styles.projectItem}>
      <span>{project.name}</span>
      <span>{project.projectManager}</span>
      <span>{project.assignedTo}</span>
      <span>{project.status}</span>
      <span>
        <button onClick={() => setShowDropdown(!showDropdown)}>⋮</button>
        {showDropdown && (
          <div className={styles.dropdown}>
<button onClick={() => onEdit(project.id)}>Edit</button>
<button onClick={() => onDelete(project.id)}>Delete</button>
          </div>
        )}
      </span>
    </div>
  );
};

export default ProjectItem;



