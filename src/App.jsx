import React, { useState } from 'react';
import ProjectList from './components/ProjectList/ProjectList';
import ProjectForm from './components/ProjectForm/ProjectForm';
import ConfirmationModal from './components/ConfirmationModal/ConfirmationModal';
import styles from  './App.module.css';
import logo from './assets/logo.png';




const App = () => {
  

  const initialProjects = [
    {
      id: 1,
      name: "Proyecto 1",
      description: "Descripción del Proyecto 1",
      projectManager: "Walt Cosani",
      assignedTo: "Ignacio Truffa",
      status: "In Progress"
    },
    // ...otros proyectos...
  ];
 
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  // Función para abrir el formulario para añadir un nuevo proyecto
  const openFormToAdd = () => {
    setCurrentProject(null); // No hay proyecto actual porque es un nuevo proyecto
    setIsFormOpen(true); // Abrir el formulario
  };

  // Función para abrir el formulario para editar un proyecto existente
  const openFormToEdit = (projectId) => {
    const projectToEdit = projects.find(p => p.id === projectId);
    setCurrentProject(projectToEdit); // Establece el proyecto completo, no solo el ID
    setIsFormOpen(true);
  };

  // Función para guardar el proyecto (tanto nuevo como editado)
  const saveProject = (project) => {
    if (project.id) {
      // Edit existing project
      setProjects(projects.map(p => p.id === project.id ? project : p));
    } else {
      // Add new project
      const newProject = {
        ...project,
        id: Date.now(), // Asegúrate de que cada proyecto tenga un ID único
        creationDate: new Date().toLocaleDateString() // Agrega la fecha de creación
      };
      setProjects([...projects, newProject]);
    }
    setIsFormOpen(false);
  };

  // Función para cerrar el formulario sin guardar
  const cancelForm = () => {
    setIsFormOpen(false); // Cerrar el formulario
  };

// Esta función prepara el proyecto para ser eliminado y muestra el modal de confirmación
const handleDelete = (projectId) => {
  // Aquí no necesitas encontrar el proyecto completo, solo guarda el ID para referencia
  setCurrentProject(projectId);
  setIsModalOpen(true);
};

  // Función para cerrar el modal de confirmación
  const closeModal = () => {
    setIsModalOpen(false); // Cerrar el modal
  };

// Esta función se llama cuando el usuario confirma la eliminación en el modal
const confirmDelete = () => {
  // Aquí asegúrate de usar el ID guardado para filtrar el proyecto eliminado
  setProjects(projects.filter(project => project.id !== currentProject));
  setCurrentProject(null); // Limpia el proyecto actual
  setIsModalOpen(false); // Cierra el modal
};

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h1>My Projects</h1>
        <button onClick={openFormToAdd} className={styles.addButton}>+ Add project</button>
      </header>

      {isFormOpen && (
        <ProjectForm
          project={currentProject}
          onSave={saveProject}
          onCancel={cancelForm}
        />
      )}

      <ProjectList
        projects={projects}
        onEdit={openFormToEdit}
        onDelete={handleDelete}
      />

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default App;
