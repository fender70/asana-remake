const tasks = []

function Task(title, description, author, contributors, dueDate, isComplete) {
    this.id = crypto.randomUUID();
    this.taskTitle = title;
    this.taskDescription = description;
    this.taskAuthor = author
    this.taskContributors = contributors;
    this.taskDueDate = dueDate;
    this.taskIsComplete = isComplete;
}

function addTask(title, description, author, contributors, dueDate) {
    const newTask = new Task(title, description, author, contributors, dueDate);
    tasks.push(newTask);
}

function displayTasks() {
    const taskDisplay = document.getElementById("taskDisplay");
    taskDisplay.innerHTML = '';

    tasks.forEach(task => {
        const taskCard = document.createElement('div');
        taskCard.classList.add('taskCard');

        taskCard.innerHTML = `
            <h3>${task.taskTitle}</h3>
            <p>${task.taskDescription}</p>
            <p>Author: ${task.taskAuthor}</p>
            <p>Contributors ${task.taskContributors}</p>
            <p>Due date: ${task.taskDueDate}</p>
            <button onclick="toggleComplete('${task.id}')">Mark as Complete</button>
            <button onclick="deleteTask('${task.id}')">Delete Task</button>
        `;

        tasksDisplay.appendChild(taskCardd);
    });
}

function toggleComplete(taskId) {
    const task = tasks.find(task => task.id === taskId);
    task.isComplete = !task.isComplete;
    displayTasks();
}

function deleteTask(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if(taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
    }
    displayTasks();
}

document.getElementById('newTaskForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const author = document.getElementById('author').value;
    const contributors = document.getElementById('contributors').value;
    const dueDate = document.getElementById('dueDate').value;
    const isComplete = document.getElementById('isComplete').value;

    addTask(title, description, author, contributors, dueDate, isComplete);
    displayTasks();
});