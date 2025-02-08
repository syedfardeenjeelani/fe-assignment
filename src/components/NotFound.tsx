import { Link, useNavigate } from "react-router-dom";
// import NeedToLogin from "./NeedToLogin";
import { RootState } from "../redux/store/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const NotFound = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const navigate = useNavigate();

    useEffect(() => {
      if (!currentUser) {
         navigate("/");
      }
    //  else {
    //     navigate("/");
    //   }
    }, [currentUser, navigate]);


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg mb-4">
        Oops! The page you're looking for does not exist.
      </p>
      <Link
        to={`/dashboard/${currentUser}`}
        className="text-blue-500 underline"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
