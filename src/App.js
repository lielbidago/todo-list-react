
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
}