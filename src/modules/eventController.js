import DOM from './domController';
import Task from './Task';

const createTask = (submitEvent) => {
  submitEvent.preventDefault();
  const formData = new FormData(submitEvent.target);
  const data = {};
  formData.forEach((val, key) => {
    if (val === '') data[key] = undefined; // Use default param values
    else data[key] = val;
  });
  DOM.addTask(Task(data));
};

(() => {
  const formCreateTask = document.getElementById('form-create-task');
  formCreateTask.addEventListener('submit', (e) => createTask(e));
})();
