import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { initializeLocalStorage } from "../utils/initLocalStorage";
 

const Dashboard = () => {
  const currentUser = useSelector((state: any) => state.user.currentUser);
  const usersData = useSelector((state: any) => state.user.users);
  const [yourProfile, setYourProfile]: any = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    initializeLocalStorage();
    if (currentUser) {
      navigate(`/dashboard/${currentUser}`);
    } else {
      navigate("/NeedToLogin");
    }
  }, [currentUser, navigate]);

  const findYourProfile = () => {
    
    initializeLocalStorage(); 
    if (currentUser && usersData[currentUser]) {
       setYourProfile([usersData[currentUser]]);
      console.log("Your Profile:", usersData[currentUser]);
      console.log('All profiles',usersData)
    } else {
      console.log("User not found");
    }
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <button onClick={findYourProfile}>Click here</button>
     <div>
      {yourProfile?.map((el:any,index:number)=>{
        return (
          <div key={index}>
            {/* <div>availability : {el?.availability}</div> */}
            <div>timezone : {el?.timezone}</div>
            <div>username : {el?.username}</div>
          </div>
        );
      })}
     </div>
    </div>
  );
};

export default Dashboard;
