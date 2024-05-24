document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;
    const colorInput = document.getElementById('colorInput');
    const taskColor = colorInput.value;

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');
    li.style.color = taskColor;
    
    const dot = document.createElement('span');
    dot.className = 'dot';

    const taskTextNode = document.createTextNode(taskText);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(dot);
    li.appendChild(taskTextNode);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
});
