import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import About from "../components/About/About";


const routes = createBrowserRouter([

{
    path: "/",
    element:<Root></Root>,
    children: [

        {
            path: '/',
            element:<Home></Home> ,
            loader: () => fetch('/public/sliderdata.json'),
        },
        {
            path: '/about',
            element:<About></About>
        }
       




    ]
      
    
}





]);

export default routes;