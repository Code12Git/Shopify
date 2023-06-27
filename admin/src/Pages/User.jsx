import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import LeftSidebar from "../component/LeftBar";
import { userRequest } from "../utils/axios";

const User = () => {
  const params = useParams();
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();

  const userId = params.id || "";

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await userRequest.get(`/users/find/${userId}`);
        console.log(response.data);
        let { username, firstname, lastname, email } = response.data;
        setUsername(username);
        setFirstname(firstname);
        setLastname(lastname);
        setEmail(email);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, [userId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await userRequest.put("/users/" + userId, {
        username,
        firstname,
        lastname,
        email,
      });
      console.log(res.data);
      await res.data;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex">
      <LeftSidebar />
      <div className="flex-1">
        {user && (
          <div className="flex mt-4">
            <div className="w-96 p-4 shadow-lg">
              <div className="flex items-center">
                <img
                  src={user.avatar}
                  alt=""
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-bold">{username}</span>
                  <span className="text-gray-500">{user.role}</span>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-sm font-bold">Account Details</span>
                <div className="flex items-center mt-2">
                  <PermIdentityIcon className="text-gray-500 mr-2" />
                  <span>{username}</span>
                </div>
                <span className="text-sm font-bold mt-4">Contact Details</span>
                <div className="flex items-center mt-2">
                  <PhoneAndroidIcon className="text-gray-500 mr-2" />
                  <span>9734675489</span>
                </div>
                <div className="flex items-center mt-2">
                  <MailOutlineIcon className="text-gray-500 mr-2" />
                  <span>{email}</span>
                </div>
                <div className="flex items-center mt-2">
                  <LocationSearchingIcon className="text-gray-500 mr-2" />
                  <span>saxena@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="flex-1 ml-4 p-4 shadow-lg">
              <span className="text-2xl font-bold">Edit</span>
              <form className="mt-4">
                <div className="flex flex-col mb-4">
                  <label className="mb-1">Username</label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    name="username"
                    className="border-b border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label className="mb-1">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    value={firstname}
                    name="firstname"
                    className="border-b border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label className="mb-1">Email</label>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    name="email"
                    className="border-b border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label className="mb-1">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="phone"
                    className="border-b border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label className="mb-1">Address</label>
                  <input
                    type="text"
                    id="address"
                    placeholder="address"
                    className="border-b border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <button
                  onClick={handleUpdate}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
