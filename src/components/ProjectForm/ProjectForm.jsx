import React, { useState, useEffect } from 'react';
import styles from './ProjectForm.module.css';


const ProjectForm = ({ project, onSave, onCancel }) => {
  const getInitialState = () => ({
    name: project?.name || '',
    description: project?.description || '',
    projectManager: project?.projectManager || '',
    assignedTo: project?.assignedTo || '',
    status: project?.status || '',
  });

  const [formState, setFormState] = useState(getInitialState);

  useEffect(() => {
    setFormState(getInitialState());
  }, [project]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formState);
  };

  const managers = ["Walt Cosani", "Sara Smith", "John Doe"];
  const assignees = ["Ignacio Truffa", "Jane Doe", "Emily Davis"];
  const statuses = ["Enabled", "Disabled", "In Progress"];

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="name">Project Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formState.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formState.description}
          onChange={handleChange}
          required
        />
        <label htmlFor="projectManager">Project Manager:</label>
        <select
          id="projectManager"
          name="projectManager"
          value={formState.projectManager}
          onChange={handleChange}
          required
        >
          <option value="">Select a manager</option>
          {managers.map(manager => (
            <option key={manager} value={manager}>{manager}</option>
          ))}
        </select>
        <label htmlFor="assignedTo">Assigned To:</label>
        <select
          id="assignedTo"
          name="assignedTo"
          value={formState.assignedTo}
          onChange={handleChange}
          required
        >
          <option value="">Select a person</option>
          {assignees.map(assignee => (
            <option key={assignee} value={assignee}>{assignee}</option>
          ))}
        </select>
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          name="status"
          value={formState.status}
          onChange={handleChange}
          required
        >
          {statuses.map(status => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
        <div className={styles.formActions}>
          <button type="submit" className={styles.submitButton}>
            {project ? 'Save changes' : 'Create project'}
          </button>
          <button type="button" onClick={onCancel} className={styles.cancelButton}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
