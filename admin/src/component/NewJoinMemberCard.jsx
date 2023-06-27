import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FiEye } from "react-icons/fi";
import { userRequest } from "../utils/axios";
const NewJoinMemberCard = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await userRequest.get("users?new=true");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col gap-5 bg-white p-5 rounded-md">
      <h1 className="font-serif text-xl">New Join Members</h1>
      {users.map((user) => {
        return (
          <div className="flex gap-5" key={user._id}>
            <Avatar src={user.img} />
            <div>
              <p className="font-bold">{user.username}</p>
              <p className="text-gray-500">Software Engineer</p>
            </div>
            <button className="flex items-center gap-1 bg-slate-200 p-2 rounded-md hover:bg-slate-500">
              <FiEye />
              <p>Display</p>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default NewJoinMemberCard;
