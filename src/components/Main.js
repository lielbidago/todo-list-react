import React from 'react';
import ToDo from "./CreateToDo";
export default Main;

// main props = {taskLst,onRemoveItem}

function Main(props){
    
    return (
    <section className="main">
            <Toggle_Lst/>
            {/* {CreateToDoLst(taskLst)} */}
            {/* {console.log(props.onRemoveItem)} */}
            <ToDoLst tasks_array={props.taskLst} onRemoveItem={props.onRemoveItem}/>

    </section>
);
}

function Toggle_Lst(){
    return (<input className="toggle-all"
    type="checkbox" />);
}

//{tasks_array}
function ToDoLst({tasks_array,onRemoveItem}){
    console.log("tasks array: ",tasks_array);
    return (<ul className="todo-list">
                {
                    tasks_array.map(task => 
                        <ToDo task={task} RemoveItem={onRemoveItem}></ToDo>)
                }
            </ul>
            );
}


