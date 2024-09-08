import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import ContactUs from "../components/ContactUs/ContactUs";
import EventDetails from "../components/EventDetails/EventDetails";
import BookingConfirmation from "../components/BookingConfirmation/BookingConfirmation";
import BookedEvents from "../components/BookedEvents/BookedEvents";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";


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
        },
        {
            path: '/booking-confirmation',
            element:<BookingConfirmation></BookingConfirmation>
        },
        {
            path: '/bookedevents',
            element:<BookedEvents></BookedEvents>
        },
        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path: '/register',
            element:<Register></Register>
        }
        
       




    ]
      
    
}





]);

export default routes;