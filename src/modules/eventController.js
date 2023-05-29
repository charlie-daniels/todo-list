import DOM from './domController';
import Task from './Task';
import Project from './Project';

const projects = [];

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

const createTask = (submitEvent) => {
  const newTask = Task(getFormData(submitEvent));
  DOM.addTask(newTask);
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
  formCreateTask.addEventListener('submit', (e) => createTask(e));

  const formCreateProject = document.getElementById('form-create-project');
  formCreateProject.addEventListener('submit', (e) => createProject(e));
})();
