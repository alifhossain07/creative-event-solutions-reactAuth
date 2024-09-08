import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import ContactUs from "../components/ContactUs/ContactUs";


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
        },
       
        {
            path: '/contactus',
            element:<ContactUs></ContactUs>
        }
       




    ]
      
    
}





]);

export default routes;