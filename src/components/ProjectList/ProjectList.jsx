import React from 'react';
import ProjectItem from '../ProjectItem/ProjectItem';
import styles from './ProjectList.module.css';

const ProjectList = ({ projects, onEdit, onDelete }) => {
  if (projects.length === 0) {
    return <div></div>;
  }

  return (
    <div className={styles.projectList}>
       {projects.map(project => (
        <ProjectItem
          key={project.id}
          project={project}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ProjectList;
