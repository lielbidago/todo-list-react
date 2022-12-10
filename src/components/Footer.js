import React from "react";
export default Footer;

function Footer({ onClearCompleted, itemLeftCount,TodosCount }){
    
    let footerClass;
    
    if(TodosCount===0){
        footerClass = 'info';
    }else{
        footerClass = 'footer';
    }
    
    return (
        <footer className={footerClass}>
            <span className="todo-count"><strong>{ itemLeftCount }</strong> items left</span>
            <button onClick={onClearCompleted} className="clear-completed">Clear completed</button>
        </footer>
    );
}
