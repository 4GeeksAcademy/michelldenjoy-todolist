import React, { useState } from 'react';

function TodoList() {
    const [tareas, setTareas] = useState([])
    const [newTask, setNewTask] = useState("")
    function addTask() {
        if (newTask.trim() !== "") {
            let newTareas = [...tareas, newTask];
            setTareas(newTareas);
            setNewTask("");
        }
    }

    function enter(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    }

    function deleteTask(taskToDelete) {
        const taskout = tareas.filter((tarea) => tarea !== taskToDelete);
        setTareas(taskout);
    }

    return (

        <div className='container w-50 max-height sombra text-center'>
            <h1>To Do <span>List</span></h1>
            <div>
                <input onChange={(e) => setNewTask(e.target.value)} onKeyDown={enter} value={newTask} type="text" placeholder="What's next?" />
                {tareas.map(tarea => (
                    <div className='d-flex justify-content-between'>
                        <p className='parrafo' >{tarea}</p>
                        <button onClick={() => deleteTask(tarea)} className="fa-solid fa-trash-can boton"></button>
                    </div>
                ))}
            </div>
            <div className='d-flex'>
                <p>{tareas.length} Items left</p>
            </div>

        </div>);

};
export default TodoList;
