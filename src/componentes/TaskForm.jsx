import { useState, useContext } from 'react'
import { TaskContext } from "../context/TaskContext";


export function TasksForm() {
    const [title, setTitle] = useState("");
    const [descripcion, setdescripcion] = useState("");
    const { createTask } = useContext(TaskContext)


    const handleSubmit = (e) => {
        e.preventDefault();

        createTask({
            title,
            descripcion
        });
        setTitle('')
        setdescripcion('')
    }
    return (
        <div className="max-w-md mx-auto">
            <form className="bg-slate-800 p-10 mb-4 " onSubmit={handleSubmit}>
                <h1 className="text-2xl fontbold text-center text-white mb-3">Crea tu tarea</h1>
                <input placeholder="escribe tu tarea"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className="bg-slate-300 p-3 w-full mb-2"
                    autoFocus
                ></input>
                <textarea placeholder='Describe tu tarea'
                    onChange={(e) => setdescripcion(e.target.value)}
                    value={descripcion}
                    className="bg-slate-300 p-3 w-full mb-2"
                ></textarea>
                <button
                    className=" bg-red-500 px-2 py-1 rounded-md hover:bg-red-400">Guardar</button>
            </form>
        </div>
    )
}
