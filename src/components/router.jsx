// import { useEffect }   from "react";
import { createBrowserRouter } from "react-router-dom";
import { LayoutPublic } from "./LayoutPublic";
import { NotFound } from "../pages/NotFound";
import { Login } from "../pages/Login";
import { Home } from '../pages/Home';
import { Datos } from "../pages/Datos";
import { Componentes } from "../pages/Componentes";
import { Menu } from "./Menu";



const token = localStorage.getItem("token");
console.log(token);
let router = null



    router = createBrowserRouter(


        [

            {

                element: <LayoutPublic />,
                errorElement: <NotFound />,
                children: [
                    {
                        path: '/',
                        element: <Login />,
                    },
                    {
                        path: '/Home',
                        element:<> <Menu/><Home /></> ,
                    },
                    {
                        path: "/Datos",
                        element: <><Menu/><Datos /></>,
                    },
                    {
                        path: "/Componentes",
                        element: <><Menu/><Componentes /></>,
                    }]
            }

        ])



export { router };

