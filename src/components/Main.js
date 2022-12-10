import React from 'react';
import ToDo from "./CreateToDo";

export default Main;

// main props = {taskLst,onRemoveItem}

function Main(props){
    
    function handleToggleAll(event) {
        props.onToggleAll(event.target.checked)
    }

    return (
    <section className="main">
            <input className="toggle-all"
            onChange={handleToggleAll}
            type="checkbox" />
            {/* <ToDoLst tasks_array={props.taskLst} 
            onRemoveItem={props.onRemoveItem}
            onmarkAsCompleted={props.onMarkAsCompleted}/> */}
            { props.children }

    </section>
);
}


//{tasks_array}
export function ToDoLst({tasks_array,onRemoveItem, onmarkAsCompleted,onRenameTask, onRenameTaskInput}){
    // console.log("tasks array: ",tasks_array);
    return (<ul className="todo-list">
                {
                    tasks_array.map(task => 
                        <ToDo task={task} 
                        RemoveItem={onRemoveItem}
                        MarkAsCompleted={onmarkAsCompleted}
                        RenameTask={onRenameTask}
                        RenameTaskInput={onRenameTaskInput}></ToDo>)
                }
            </ul>
            );
}


