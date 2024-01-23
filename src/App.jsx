import React, { useState, useEffect } from 'react';
import ProjectList from './components/ProjectList/ProjectList';
import ProjectForm from './components/ProjectForm/ProjectForm';
import ConfirmationModal from './components/ConfirmationModal/ConfirmationModal';
import styles from './App.module.css';
import logo from './assets/logo.png';
import projectsData from '../projects.json'

const App = () => {

  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setProjects(projectsData);
  }, []);


  const openFormToAdd = () => {
    setCurrentProject(null);
    setIsFormOpen(true);
  };

  const openFormToEdit = (projectId) => {
    const projectToEdit = projects.find(p => p.id === projectId);
    setCurrentProject(projectToEdit);
    setIsFormOpen(true);
  };


  const saveProject = (project) => {
    if (project.id) {

      setProjects(projects.map(p => p.id === project.id ? project : p));
    } else {
      const newProject = {
        ...project,
        id: Date.now(),
        creationDate: new Date().toLocaleDateString()
      };
      setProjects([...projects, newProject]);
    }
    setIsFormOpen(false);

  };


  const cancelForm = () => {
    setIsFormOpen(false); 
  };

  const handleDelete = (projectId) => {
    setCurrentProject(projectId); 
    setIsModalOpen(true);
};

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmDelete = () => {
    setProjects(projects.filter(project => project.id !== currentProject));
    setCurrentProject(null); 
    setIsModalOpen(false); 
};


  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src={logo} alt="Logo" className={styles.logo} />
        { }
        {!isFormOpen && (
          <>
            <h1>My Projects</h1>
            <button onClick={openFormToAdd} className={styles.addButton}>+ Add project</button>
          </>
        )}
      </header>

      {isFormOpen && (
        <ProjectForm
          project={currentProject}
          onSave={saveProject}
          onCancel={cancelForm}
        />
      )}

      {!isFormOpen && (
        <ProjectList
          projects={projects}
          onEdit={openFormToEdit}
          onDelete={handleDelete}
        />
      )}

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default App;