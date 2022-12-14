import {useContext, useRef} from "react";
import {AuthContext} from "../providers/auth_context";
import { useNavigate } from 'react-router-dom';
import "./login.css"

export function Login() {

    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const { setCurrentUser } = useContext(AuthContext); 
    let navigate = useNavigate();
  
    function handleLogin() {
      const sigInInfo = {
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
      }
  
      fetch('https://jsonplaceholder.typicode.com/users/2')
          .then( response => response.json())
          .then((user) => {
            setCurrentUser(user);
            navigate('../todosAppPage')
          })

      // setCurrentUser({name:'liel', id:'3345'});
      // navigate('../todosAppPage');

    }
  
    return (
        <main className="form-signin w-100 m-auto">
          <form>
              <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
  
              <div className="form-floating">
              <label>Email address </label>
                <input type="email"
                       ref={emailInputRef}
                       className="form-control"
                       placeholder="name@example.com" />
                  
              </div>
              <div className="form-floating">
              <label >Password </label>
                <input type="password"
                       ref={passwordInputRef}
                       className="form-control"
                       placeholder="Password" />
                  
              </div>
  
              <button className="button-17"
                      onClick={handleLogin}
                      type="button">Sign in</button>
          </form>
        </main>
    )
  }