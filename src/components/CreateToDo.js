
export default ToDo;


function ToDo({task,RemoveItem,MarkAsCompleted,RenameTask, RenameTaskInput}){


    function HandleRenameInput(event){
        if(event.key === 'Enter'){
            // console.log("@@@",event.target.parentNode.parentNode);
            task.editing = false;
            RenameTask(task,event.target.value);
        }
    }

    function handleDoubleClick(){
        RenameTaskInput(task);
    }
    
    return (
        <li className={(task.completed ? 'completed' : '') + (task.editing ? ' editing':'')} 
        key={task.id}>
            <div className="view">
                <input className="toggle"
                    type="checkbox" onClick={()=>MarkAsCompleted(task)} checked={task.completed}/>
                <label onDoubleClick={handleDoubleClick}>{task.title}</label>
                <button className="destroy" onClick={()=> RemoveItem(task)}></button> 
            </div>
            <input className="edit" onKeyUp={(e)=>HandleRenameInput(e)} />
        </li>
    );
}