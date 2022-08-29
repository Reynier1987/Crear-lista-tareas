import { createContext, useEffect, useState} from "react";
import { tasks as data } from '../data/task'
import { nanoid } from 'nanoid' //crear un id aleatorio


export const TaskContext = createContext()

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);

   
    function createTask(task) {
        setTasks([...tasks, {
            id: nanoid(),
            title: task.title,
            descripcion: task.descripcion,

        }])

    }
    function deleteTask(taskId) {
        console.log(tasks)
        console.log(taskId)
        setTasks(tasks.filter(task => task.id !== taskId))
    }
    useEffect(() => {
        setTasks(data)
    }, [])



    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}

