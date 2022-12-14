import {useContext} from "react";
import {AuthContext} from "../providers/auth_context";
import {Link} from "react-router-dom";
import './welcome.css';


export function Welcome(){
    return (
        <div className='welcome'>
            <h1>Welcome!</h1>

            <p>Here is my todo list website. 
                <br></br>
                <br></br>
                Here you can create todo lists and track your tasks status!
                <br></br>
                <br></br>
                Enjoy!
            </p>
            <Link className="button-17" role="button" to={`/login`}>login</Link>
        </div>
        
    );
}