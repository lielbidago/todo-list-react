import React from 'react';
export default ToDo;


function ToDo({task,RemoveItem}){
    
    function handleRemove(event){
        console.log(event.target, 'remove!!', task.title, RemoveItem);
        RemoveItem(task.title);
    }

    return (
        <li>
            <div className="view">
                <input className="toggle"
                    type="checkbox" />
                <label>{task.title}</label>
                <button className="destroy" onClick={handleRemove}></button> 
            </div>
            <input className="edit" />
        </li>
    );
}