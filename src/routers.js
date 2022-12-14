import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import {Login} from "./pages/login";
import {TodoAppPage} from "./pages/todoAppPage";
import React from "react";
import {Welcome} from "./pages/welcome";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: 'welcome',
        element: <Welcome />
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'todosAppPage',
        element: <TodoAppPage/>
      },
    ]
  },

]);