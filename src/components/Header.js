import React, { useContext } from 'react';
import {ListContext} from "../providers/list_context";
export default Header;

// export default Header;

function Header({appTitle, text}){    

    const { AddTodo } = useContext(ListContext);

    function HandleToDoInput(event){
        if(event.key === 'Enter'){
            AddTodo(event.target.value);
            
        }
    }
    
    return (
        <header className="header">
        <h1>{appTitle}</h1>
        <input className="new-todo"
            placeholder={text}
            autoFocus onKeyUp={HandleToDoInput}/>
        </header>
    );
}

// function New_ToDo(){
    
//     function HandleToDoInput(event){
//         if(event.key === 'Enter'){

//         }
//     }
    
    
//     return (<input className="new-todo"
//             placeholder="What needs to be done?"
//             autoFocus onKeyUp={HandleToDoInput}/>);
// }

