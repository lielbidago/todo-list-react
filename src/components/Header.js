import React from 'react';
export default Header;
// export default Header;

function Header(props){    

    function HandleToDoInput(event){
        if(event.key === 'Enter'){
            props.onAddItem(event.target.value);
            
        }
    }
    
    return (
        <header className="header">
        <h1>{props.appTitle}</h1>
        <input className="new-todo"
            placeholder={props.text}
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

