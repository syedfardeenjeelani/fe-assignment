import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { initializeLocalStorage } from "../utils/initLocalStorage";

const Dashboard = () => {
  const currentUser = useSelector((state: any) => state.user.currentUser);
  const usersData = useSelector((state: any) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    initializeLocalStorage();
    if (currentUser) {
      navigate(`/dashboard/${currentUser}`);
    } else {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const findYourProfile = () => {
    
    initializeLocalStorage();
    console.log(usersData)
    if (currentUser && usersData[currentUser]) {
      console.log("Your Profile:", usersData[currentUser]);
      console.log('All profiles',usersData)
    } else {
      console.log("User not found");
    }
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <button onClick={findYourProfile}>Click here</button>
    </div>
  );
};

export default Dashboard;
