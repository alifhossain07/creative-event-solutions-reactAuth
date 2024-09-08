import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import ContactUs from "../components/ContactUs/ContactUs";
import EventDetails from "../components/EventDetails/EventDetails";


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
        },
        {
            path: '/event/:id',
            element: <EventDetails></EventDetails>,
            loader: () => fetch('/public/sliderdata.json')
            }
        
       




    ]
      
    
}





]);

export default routes;