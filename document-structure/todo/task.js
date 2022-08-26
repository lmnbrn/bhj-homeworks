const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const tasksAdd = document.getElementById('tasks__add');
tasksAdd.addEventListener('click', addTask);
function removeTask() {
    this.closest('.task').remove();
}

function addTask(event) {
    if (taskInput.value !== '' && (event.code === 'Enter' || event.type === 'click')) {
        const task = document.createElement('div');
        task.classList.add('task');
        task.innerHTML = `<div class='task__title'>
      ${taskInput.value}
      </div>
      <a href='#' class='task__remove'>&times;</a>`;
        tasksList.appendChild(task);
        taskInput.value = '';
        task.querySelector('.task__remove').addEventListener('click', removeTask);
    }
}