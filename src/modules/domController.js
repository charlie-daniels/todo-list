export default (() => {
  const addTask = (task) => {
    const container = document.createElement('div');
    const title = document.createElement('h2');
    const description = document.createElement('p');
    const date = document.createElement('p');
    const priority = document.createElement('p');
    title.textContent = task.title;
    description.textContent = task.description;
    date.textContent = task.date;
    priority.textContent = task.priority;
    container.append(title, description, date, priority);
    document.body.appendChild(container);
  };

  const addProject = (project) => {
    const container = document.createElement('div');
    const title = document.createElement('h2');
    const description = document.createElement('p');
    title.textContent = project.title;
    description.textContent = project.description;
    container.append(title, description);
    document.body.appendChild(container);
  };

  return { addTask, addProject };
})();
