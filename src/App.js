
// import './App.css'; 

import { useRef } from 'react';
import {Outlet, Route} from "react-router-dom";
import {AuthContext} from "./providers/auth_context";
import {useState} from "react";

//bonus - welcome === home page
import { Link, Routes, Navigate} from 'react-router-dom';
import {Welcome} from "./pages/welcome";
import {Login} from "./pages/login";
import {TodoAppPage} from "./pages/todoAppPage";

export default App;


function App() {

  const [currentUser, setCurrentUser] = useState(null);

  return (
      <AuthContext.Provider value={{
        currentUser,
        setCurrentUser
      }}>
        {/* <Outlet /> */}
        <Routes>
            <Route path="*" element={<Welcome />} />
            <Route path="login" element={<Login />} />
            <Route path='todosAppPage' element={<TodoAppPage />}/>
        </Routes>
      </AuthContext.Provider>
  );

  
  // const user = {};
  // const [listArr, setlistArr] = useState([]);

  // const inputRef = useRef(null);

  // function handleAddList(e){
  //   addList(inputRef.current.value);

  // }
  
  // function addList(listName){
  //   const newListArr = listArr.concat([listName]);
  //   setlistArr(newListArr);
  // }

  // return (
  //   user ? (
  //       <>
  //         <input ref={inputRef} type="text"/>
  //         <button onClick={handleAddList}>ADD LIST</button>

  //         {/* <TodosApp appName="todos"/>
  //         <TodosApp appName="tasks"/>
  //         <TodosApp appName="backlog"/> */}

  //         {listArr.map((newlist,index) => 
  //         (<TodosApp key={Date.now()+index} appName={newlist}/>)
  //         )}
  //       </>
  //   ) : (
  //       <>
  //         <input type="text" placeholder={'username'}/>
  //         <input type="password" placeholder={'password'}/>
  //         <button>sign in</button>
  //       </>
  //   ));



  // const [ Todos, setTodos ] = useState([]);
  // const [ noneCompletedItemsCount, setNoneCompletedItemsCount ] = useState(0);
  
  // const appTitle = 'my todos';

  // useEffect(() => {
  //   const uncompleted = Todos.filter( todo => !todo.completed );
  //   setNoneCompletedItemsCount(uncompleted.length);
  //   }, [Todos]);
  

  // const AddTodo = (title) => {
  //   // Todos.push({title, completed:false}) // <--- if we have an object = {title:title} we can just use {title}
    
  //   const newTodos = Todos.concat([{id:Date.now(),title, completed:false, editing:false}]); 
  //   let input_value = Array.from(document.getElementsByClassName('new-todo'))[0];
  //   input_value.value = '';
  //   setTodos(newTodos);

  //   //or we can also do:
  //   //Todos = [...Todos,{id:Date.now(),title, completed:false}]
  
  // };

  // // Events
  // const removeTodo = (todoToRemove) => {
  //   const newTodos = Todos.filter( currentTodo => currentTodo.id !== todoToRemove.id );
  //   setTodos(newTodos);
  // }

  // const markAsCompleted = (task) => {

  //   const newTodos = Todos.map( (todo) => (task.id===todo.id? {...todo,completed:(!todo.completed)} : todo));
  //   setTodos(newTodos);
  // }

  
  // const clearAllCompletedItems = () => {
  //   const newTodos = Todos.filter( currentTodo => !currentTodo.completed );
  //   setTodos(newTodos);
  // }

  // const toggleAllItems = (checkedValue) => {
  //   const newTodos = Todos.map( todo => ({ ...todo, completed: checkedValue }));
  //   // todos = todos.map( todo => Object.assign({}, todo, {completed: checkedValue}));
  //   setTodos(newTodos);
  // }

  // const renameTask = (task, newInput) =>{
  //   const newTodos = Todos.map(todo => (task.id===todo.id? {...todo,title:newInput} : todo));
  //   console.log(newTodos);//
  //   setTodos(newTodos);
  // }

  // const renameTaskInput = (task) => {
  //   const newTodos = Todos.map(todo => (task.id===todo.id? {...todo,editing:true} : {...todo,editing:false}));
  //   console.log(newTodos); //
  //   setTodos(newTodos);
  // }

  
  // return (
  //   <section className="todoapp">
  //     <Header
  //      appTitle={appTitle} onAddItem={AddTodo} 
  //      text="What needs to be done?">
  //      </Header>

  //     <Main onToggleAll={toggleAllItems}>
  //       <ToDoLst tasks_array={Todos} 
  //           onRemoveItem={removeTodo}
  //           onmarkAsCompleted={markAsCompleted}
  //           onRenameTask={renameTask} onRenameTaskInput={renameTaskInput}/>
  //     </Main>

  //     <Footer itemLeftCount={noneCompletedItemsCount}
  //           onClearCompleted={clearAllCompletedItems}
  //           TodosCount = {Todos.length}>

  //           </Footer>
  //     </section>
    
  // );

      
}








    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>