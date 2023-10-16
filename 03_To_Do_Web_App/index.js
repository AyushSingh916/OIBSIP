const taskInput = document.getElementById('task');
const addBtn = document.getElementById('add');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
    const taskText = taskInput.value;
    if (taskText) {
        createTask(taskText);
        taskInput.value = '';
    }
});

function createTask(text) {
    const li = document.createElement('li');
    li.innerHTML = `
        ${text}
        <button>Delete</button>
    `;
    taskList.appendChild(li);

    const deleteButton = li.querySelector('button');
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(li);
    });
}

taskInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        addBtn.click();
    }
});
