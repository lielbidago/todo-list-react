import '../todoAppPage.css';
import '../providers/list_context';
import {TodosApp} from "../components/todos-app";
import { useState, useRef } from 'react';
import { useContext } from 'react';
import {AuthContext} from "../providers/auth_context";
import { useNavigate } from 'react-router-dom';

export function TodoAppPage(){

    const user = {};
    const [listArr, setlistArr] = useState([]);
    const { setCurrentUser, currentUser } = useContext(AuthContext);
    let navigate = useNavigate();

    const inputRef = useRef(null);
    

    function handleAddList(e){
        addList(inputRef.current.value);

    }
    
    function addList(listName){
        const newListArr = listArr.concat([listName]);
        setlistArr(newListArr);
    }
    function logout(){
        console.log('entered logout');
        setCurrentUser(null);
        navigate("../login");
        
    }

    return (
        user ? (
            <>
            <div className='pageHeader'>
                <div className='add-list'>
                <input ref={inputRef} type="text" placeholder='Add lists here'/>
                <button onClick={handleAddList}>ADD LIST</button>
                </div>
                <div className='logout'>
                    <label>Hi, {currentUser?currentUser.name:''} </label> 
                    <button onClick={logout}>log out</button>
                </div>
            </div>
            
        

            {listArr.map((newlist,index) => 
            (<TodosApp key={Date.now()+index} appName={newlist}/>)
            )}
            </>
        ) : (
            <>
            <input type="text" placeholder={'username'}/>
            <input type="password" placeholder={'password'}/>
            <button>sign in</button>
            </>
        ));
}