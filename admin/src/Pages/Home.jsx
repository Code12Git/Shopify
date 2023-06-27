import React, { useEffect, useMemo, useState } from "react";
import FeaturedInfo from "../component/FeaturedInfo";
import Charts from "../component/Charts";
import { userData } from "../dummyData";
import NewJoinMemberCard from "../component/NewJoinMemberCard";
import WidgetLg from "../component/WidgetLg";
import LeftSidebar from "../component/LeftBar";
import { userRequest } from "../utils/axios";
const Home = () => {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        console.log(res.data);
        res.data.map((item) => {
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ]);
        });
      } catch (e) {
        console.log(e);
      }
    };
    getStats();
  }, [MONTHS]);
  console.log(userStats);
  return (
    <div className="flex">
      <LeftSidebar />
      <div className="flex flex-col">
        <FeaturedInfo />
        <Charts
          data={userStats}
          title="User Analytics"
          grid
          dataKey="Active User"
        />
        <div className="flex flex-wrap gap-52 items-center mt-10 p-2">
          <NewJoinMemberCard />
          <WidgetLg />
        </div>
      </div>
    </div>
  );
};

export default Home;
