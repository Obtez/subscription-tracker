import { ObjectId } from "mongoose";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthService from "../../services/auth.service";

interface User {
  _id?: ObjectId;
  email: string;
  userName: string;
  password: string;
  token: string;
}

function Profile() {
  const [userData, setUserData] = useState<User>({
    email: "",
    userName: "",
    password: "",
    token: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => { 
    if (state) {
      setIsLoading(false);
      setUserData(state);
    } else if (AuthService.getCurrentUser()) {
      setIsLoading(false);
      setUserData(AuthService.getCurrentUser());
    } else {
       navigate("/login");
    }
  }, []);

  const logout = () => {
    AuthService.logout();
    navigate("/");
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome {userData.userName} </p>
      <button type="button" onClick={logout}>Logout</button>
    </div>
  );
}

export default Profile;