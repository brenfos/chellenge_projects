import React from 'react';
import ProjectItem from '../ProjectItem/ProjectItem';
import styles from './ProjectList.module.css';

const ProjectList = ({ projects, onEdit, onDelete }) => {
    if (projects.length === 0) {
        return <div>No projects found.</div>;
    }

    return (
        <div className={styles.projectListContainer}>
        <table className={styles.projectTable}>
                <thead>
                    <tr>
                        <th>Project Info</th>
                        <th>Project Manager</th>
                        <th>Assigned To</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map(project => (
                        <ProjectItem
                            key={project.id}
                            project={project}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProjectList;
