import React from 'react';

const TasksPage = async () => {

    const response = await fetch("http://localhost:3000/api/tasks");
    const tasks = await response.json();

    console.log(tasks);

    return (
        <div>
            <h1>TasksPage Component</h1>
        </div>
    );
};

export default TasksPage;
