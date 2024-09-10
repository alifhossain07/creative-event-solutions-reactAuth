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
import PrivateRoute from "./PrivateRoute";
import UserDashboard from "../components/UserDashboard/UserDashboard";


const routes = createBrowserRouter([

{
    path: "/",
    element:<Root></Root>,
    children: [

        {
            path: '/',
            element:<Home></Home> ,
            loader: () => fetch('sliderdata.json'),
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
            element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>,
            loader: () => fetch('sliderdata.json')
        },
        {
            path: '/booking-confirmation',
            element:<BookingConfirmation></BookingConfirmation>
        },
        {
            path: '/bookedevents',
            element:<PrivateRoute><BookedEvents></BookedEvents></PrivateRoute>
        },
        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path: '/register',
            element:<Register></Register>
        },
        {
            path:'/user-dashboard',
            element:<PrivateRoute><UserDashboard></UserDashboard></PrivateRoute>
        }
        
       




    ]
      
    
}





]);

export default routes;