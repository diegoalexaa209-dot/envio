export function updateTask(tasks, id, changes) {

    return tasks.map(task => {

        if (task.id !== id) {
            return task;
        }

        return {
            ...task,
            ...changes
        };
    });
}


export function toggleTask(tasks, id) {

    return tasks.map(task => {

        if (task.id !== id) {s
            return task;
        }

        return {
            ...task,
            completed: !task.completed
        };
    });
}


export function deleteTask(tasks, id) {

}