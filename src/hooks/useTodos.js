import { useEffect, useState, useRef } from "react";
import { inputRef } from "../hooks/useTodos";



export default function useTodos(){

    const [ Todos, setTodos ] = useState([]);
    const [ noneCompletedItemsCount, setNoneCompletedItemsCount ] = useState(0);
  
    const appTitle = 'my todos';

    useEffect(() => {
        const uncompleted = Todos.filter( todo => !todo.completed );
        setNoneCompletedItemsCount(uncompleted.length);
    }, [Todos]);
    

    const AddTodo = (title) => {
        // Todos.push({title, completed:false}) // <--- if we have an object = {title:title} we can just use {title}
        
        const newTodos = Todos.concat([{id:Date.now(),title, completed:false, editing:false}]); 
        // let input_value = Array.from(document.getElementsByClassName('new-todo'))[0];
        // input_value.value = '';
        setTodos(newTodos);
        // inputRef = useRef(null);

        //or we can also do:
        //Todos = [...Todos,{id:Date.now(),title, completed:false}]
    
    };

    // Events
    const removeTodo = (todoToRemove) => {
        const newTodos = Todos.filter( currentTodo => currentTodo.id !== todoToRemove.id );
        setTodos(newTodos);
    }

    const markAsCompleted = (task) => {

        const newTodos = Todos.map( (todo) => (task.id===todo.id? {...todo,completed:(!todo.completed)} : todo));
        setTodos(newTodos);
    }

    
    const clearAllCompletedItems = () => {
        const newTodos = Todos.filter( currentTodo => !currentTodo.completed );
        setTodos(newTodos);
    }

    const toggleAllItems = (checkedValue) => {
        const newTodos = Todos.map( todo => ({ ...todo, completed: checkedValue }));
        // todos = todos.map( todo => Object.assign({}, todo, {completed: checkedValue}));
        setTodos(newTodos);
    }

    const renameTask = (task, newInput) =>{
        const newTodos = Todos.map(todo => (task.id===todo.id? {...todo,title:newInput} : todo));
        console.log(newTodos);//
        setTodos(newTodos);
    }

    const renameTaskInput = (task) => {
        const newTodos = Todos.map(todo => (task.id===todo.id? {...todo,editing:true} : {...todo,editing:false}));
        console.log(newTodos); //
        setTodos(newTodos);
    }

    return {
        Todos,
        setTodos,
        AddTodo,
        removeTodo,
        renameTask,
        renameTaskInput,
        markAsCompleted,
        toggleAllItems,
        clearAllCompletedItems,
        noneCompletedItemsCount,
        setNoneCompletedItemsCount,
    }
}