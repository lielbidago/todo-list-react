import useTodos from "../hooks/useTodos";
import Header from "./Header";
import Main from "./Main";
import ToDo from "./CreateToDo";
import Footer from "./Footer";
import {ListContext} from "../providers/list_context";
import {ToDoLst} from "./Main";

export function TodosApp({appName}) {
    
    const todoApi = useTodos();

    return (
        <ListContext.Provider value={todoApi}>
            <section className="todoapp">
            <Header
            appTitle={appName}
            text="What needs to be done?">
            </Header>

            <Main>
                <ToDoLst/>
            </Main>

            <Footer></Footer>
            </section>
        </ListContext.Provider>
    );

}
