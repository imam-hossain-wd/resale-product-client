import React, { useContext } from "react";
import { userContext } from "../../contexts/authContext/AuthContext";


const Profile = () => {
  const { user } = useContext(userContext);
  
  return (
    <div className="w-3/5 mx-auto">
      <div className="max-w-md p-8 sm:flex sm:space-x-6 bg-text-black">
        <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
          <img
            src={user?.photoURL}
            alt=""
            className="object-cover object-center w-full h-full rounded bg-gray-500"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
          </div>
          <div className="space-y-1">
            <span className="flex items-center space-x-2">
              <span className="dark:text-gray-400">{user?.email}</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="dark:text-gray-400 w-44">{user?.photoURL}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
