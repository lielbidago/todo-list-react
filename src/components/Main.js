import React from 'react';
import ToDo from "./CreateToDo";
export default Main;


function Main(props){
    
    function handleToggleAll(event) {
        props.onToggleAll(event.target.checked)
    }

    return (
    <section className="main">
            <input className="toggle-all"
            onChange={handleToggleAll}
            type="checkbox" />
            { props.children }

    </section>
);
}


export function ToDoLst({tasks_array,onRemoveItem, onmarkAsCompleted,onRenameTask, onRenameTaskInput}){

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


