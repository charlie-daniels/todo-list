export default (() => {
  // Class operators
  const toggleElementHidden = (el) => {
    el.classList.toggle('hidden');
  };

  const callTaskMenu = (parentProjectNumber) => {
    const taskMenu = document.getElementById('form-create-task');
    toggleElementHidden(taskMenu);
    taskMenu.setAttribute('data-parent-project-number', parentProjectNumber);
  };

  const hideTaskMenu = () => {
    const taskMenu = document.getElementById('form-create-task');
    toggleElementHidden(taskMenu);
    taskMenu.removeAttribute('data-parent-project-number');
  };

  const addTask = (task, parentProjectNumber) => {
    const container = document.createElement('div');
    const title = document.createElement('h2');
    const description = document.createElement('p');
    const date = document.createElement('p');
    const priority = document.createElement('p');
    const parent = document.querySelector(`[data-project-number="${parentProjectNumber}"].project`);

    title.textContent = task.title;
    description.textContent = task.description;
    date.textContent = task.date;
    priority.textContent = task.priority;

    container.append(title, description, date, priority);
    parent.appendChild(container);
    hideTaskMenu();
  };

  const getNextProjectNumber = () => {
    const count = document.querySelectorAll('[data-project-number]').length;
    return count + 1;
  };

  const showProject = (project) => {
    // Hide current project and unhide this one
    const currentProject = document.querySelector('.project:not(.hidden)');
    if (currentProject) currentProject.classList.add('hidden');
    project.classList.remove('hidden');
  };

  const addToProjectMenu = (el, title, number) => {
    const buttonSelectProject = document.createElement('button');
    buttonSelectProject.textContent = title;
    buttonSelectProject.setAttribute('data-project-number', number);
    buttonSelectProject.addEventListener('click', () => showProject(el));
    const projectList = document.querySelector('.project-list');
    projectList.append(buttonSelectProject);
    showProject(el);
  };

  const deleteProject = (number) => {
    const related = document.querySelectorAll(`[data-project-number="${number}"]`);
    related.forEach((e) => e.remove());
  };

  const addProject = (project) => {
    const container = document.createElement('div');
    const title = document.createElement('h2');
    const description = document.createElement('p');
    const projectNumber = getNextProjectNumber();
    container.setAttribute('data-project-number', projectNumber);
    container.classList.add('project');
    addToProjectMenu(container, project.title, projectNumber);

    title.textContent = project.title;
    description.textContent = project.description;
    const buttonAddTask = document.createElement('button');
    buttonAddTask.textContent = 'add task';
    buttonAddTask.addEventListener('click', () => callTaskMenu(projectNumber));
    const buttonDeleteProject = document.createElement('button');
    buttonDeleteProject.textContent = 'delete project';
    buttonDeleteProject.addEventListener('click', () => deleteProject(projectNumber));

    container.append(title, description, buttonAddTask, buttonDeleteProject);
    const projectContainer = document.getElementById('content');
    projectContainer.appendChild(container);
  };

  return { addTask, addProject, toggleElementHidden };
})();
