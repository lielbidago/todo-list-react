import React, { useContext } from "react";
import {ListContext} from "../providers/list_context";
export default Footer;

function Footer(){
    
    const {noneCompletedItemsCount,setNoneCompletedItemsCount,clearAllCompletedItems, Todos} = useContext(ListContext);
    
    let footerClass;
    
    if(Todos.length===0){
        footerClass = 'info';
    }else{
        footerClass = 'footer';
    }
    
    return (
        <footer className={footerClass}>
            <span className="todo-count"><strong>{ Todos.length }</strong> items left</span>
            <button onClick={clearAllCompletedItems} className="clear-completed">Clear completed</button>
        </footer>
    );
}
