import React, { useContext } from 'react';
import ToDo from "./CreateToDo";
import {ListContext} from "../providers/list_context";
export default Main;


function Main({children}){
    
    const {toggleAllItems} = useContext(ListContext);

    function handleToggleAll(event) {
        toggleAllItems(event.target.checked);
    }

    return (
    <section className="main">
            <input className="toggle-all"
            onChange={handleToggleAll}
            type="checkbox" />
            { children }

    </section>
);
}


export function ToDoLst(){

    const {Todos} = useContext(ListContext);

    return (<ul className="todo-list">
                {
                    Todos.map(task => 
                        <ToDo task={task} 
                         key={task.id}></ToDo>)
                }
            </ul>
            );
}


