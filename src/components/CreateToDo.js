
import {ListContext} from "../providers/list_context";
import {useContext} from "react";
export default ToDo;



function ToDo({task}){

    const {removeTodo, markAsCompleted,renameTask, renameTaskInput} = useContext(ListContext);

    function HandleRenameInput(event){
        if(event.key === 'Enter'){
            // console.log("@@@",event.target.parentNode.parentNode);
            task.editing = false;
            renameTask(task,event.target.value);
        }
    }

    function handleDoubleClick(){
        renameTaskInput(task);
    }
    
    return (
        <li className={(task.completed ? 'completed' : '') + (task.editing ? ' editing':'')} 
        key={task.id}>
            <div className="view">
                <input className="toggle"
                    type="checkbox" onClick={()=>markAsCompleted(task)} checked={task.completed}/>
                <label onDoubleClick={handleDoubleClick}>{task.title}</label>
                <button className="destroy" onClick={()=> removeTodo(task)}></button> 
            </div>
            <input className="edit" onKeyUp={(e)=>HandleRenameInput(e)} />
        </li>
    );
}