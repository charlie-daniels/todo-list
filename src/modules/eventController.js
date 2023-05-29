import DOM from './domController';
import Task from './Task';
import Project from './Project';

// Retrieves formData from form submit event.
const getFormData = (submitEvent) => {
  submitEvent.preventDefault();
  const formData = new FormData(submitEvent.target);
  const data = {};
  formData.forEach((val, key) => {
    if (val === '') data[key] = undefined; // Use default param values
    else data[key] = val;
  });
  return data;
};

const createTask = (submitEvent, projectNumber) => {
  const newTask = Task(getFormData(submitEvent));
  DOM.addTask(newTask, projectNumber);
};

const createProject = (submitEvent) => {
  const newProject = Project(getFormData(submitEvent));
  DOM.addProject(newProject);
};

// Initialise

(() => {
  // Create default project
  const defaultProject = Project({ title: 'inbox', description: '' });
  DOM.addProject(defaultProject);

  // Add event listeners
  const formCreateTask = document.getElementById('form-create-task');
  formCreateTask.addEventListener('submit', (e) => {
    const parentProjectNumber = e.target.getAttribute('data-parent-project-number');
    createTask(e, parentProjectNumber);
    e.target.reset();
  });

  const formCreateProject = document.getElementById('form-create-project');
  formCreateProject.addEventListener('submit', (e) => {
    createProject(e);
    DOM.toggleElementHidden(e.target);
    e.target.reset();
  });

  const showProjectMenu = document.getElementById('show-project-menu');
  showProjectMenu.addEventListener('click', () => DOM.toggleElementHidden(formCreateProject));
})();
