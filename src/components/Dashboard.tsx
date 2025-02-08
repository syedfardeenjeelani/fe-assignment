import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import NeedToLogin from "./NeedToLogin";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser)
  const navigate = useNavigate()


  if(!currentUser){
    return <NeedToLogin/>
  }  else {
    navigate(`/dashboard/${currentUser}`)
  }



  return <div>Dashboard</div>;
};

export default Dashboard;
