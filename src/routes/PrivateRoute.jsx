import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="flex items-center justify-center mt-[200px] mb-[200px] ">  {/* Center the spinner */}
        <span className="text-center loading loading-dots loading-3xl"></span> {/* Make the spinner bigger */}
      </div>
    }


    if(user){

        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;