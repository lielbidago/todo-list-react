
import './App.css';

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
// import {testtt} from "./components/test";


function App() {
  const appTitle = 'Todo List';
  
  // testtt()
  
  let Todos = [
          {title:'learn react', completed:false},
          {title:'something else', completed:false},
          {title:'learn JS', completed:true},
        ];

    //let Todos = [];

  const AddTodo = (title) => {
    Todos.push({title, completed:false}) // <--- if we have an object = {title:title} we can just use {title}
    
    //in class: *concat* returns a new array
    //Todos = Todos.concat([{id:Date.now(),title, completed:false}]); 
    //or we can also do:
    //Todos = [...Todos,{id:Date.now(),title, completed:false}]
  
  };

  // Events

  const removeTodo = (title) => {
    console.log('array=',Todos);
    let task;
    Todos.forEach(todo => {todo.title===title? task = todo:task=null})
    // const Todosnew = Todos.filter(todo => todo.title!==title);
    // Todosnew.forEach(todo => if(Todos.includes(todo)){Todos.remove(todo)})
    const task_index = Todos.indexOf(task);
    Todos.splice(task_index,1);
    console.log(Todos);

    //in class:
    //removeTodo = (todoremove) => {Todos = Todos.filter(cur_todo => cur_todo.id !== todoremove.id)}
  }

  // todo: where should we implemnt it?
  const markAsCompleted = (task) => {
      task.completed = true;
  }

  const clearAllCompleted = (Todos) => {
    Todos.forEach(todo => {if(todo.completed) {Todos.remove(todo)}})
    //Todos = Todos.filter(cur_todo => !cur_todo.completed);
  }

  const toggleAll = (checkedval) => {
    Todos = Todos.map(todo => ({... todo, completed:checkedval}));
  }

  // todo: pass title, placeholder to header
  // todo: pass item left to footer
  
  // todo: BONUS THINK ABOUT EDIT IN PLACE (DOUBLE CLICK TO VHANGE ITEM)

  
  return (
    <section className="todoapp">
      <Header appTitle={appTitle} onAddItem={AddTodo}></Header>
      <Main taskLst={Todos} onRemoveItem={removeTodo}></Main>
      <Footer></Footer>
      </section>
    
  );
}

export default App;







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