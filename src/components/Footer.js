import React from "react";
export default Footer;

function Footer(){
    return (
        <footer className="footer">
            {ToDo_Count(0)}
            {Clear_Completed()}
        </footer>
    );
}

function ToDo_Count(count){
    return (<span className="todo-count"><strong>{count}</strong> items left</span>);
}
function Clear_Completed(){
    return (<button className="clear-completed">Clear completed</button>);
}