"use client";

import React, { useEffect, useState } from "react";
import { FaPortrait, FaTasks, FaUserFriends, FaUserTie } from "react-icons/fa";

const page = () => {
  const [dashcboadcounts, setDashboardCount] = useState();

  useEffect(() => {
    const getStats = async () => {
      try {
        const response = await fetch("../api/dashboardupdate");
        if (!response.ok) {
          throw new Error("Failed to fetch Data");
        }
        const result = await response.json();

        setDashboardCount(result);
      } catch (error) {
        console.error("Error fetching Data", error);
      }
    };

    getStats();
  }, []);

  return (
    <>
      <div>
        <p className=" font-bold">Home</p>
        <div className=" flex gap-4 mt-4">
          <div className=" inline-block rounded-lg font-medium text-xs bg-[#F6AD55] p-3 w-64">
            <FaUserTie className=" w-10 h-8 mb-4" />
            <p className=" font-bold text-sm">Clients</p>
            <p className=" text-lg font-bold">{dashcboadcounts?.clientCount}</p>
          </div>
          <div className=" inline-block rounded-lg font-medium text-xs bg-[#62B3EE] p-3 w-64">
            <FaTasks className=" w-10 h-8 mb-4" />
            <p className=" font-bold text-sm">Job Cards</p>
            <p className=" text-lg font-bold">
              {dashcboadcounts?.jobcardCount}
            </p>
          </div>
          <div className=" inline-block rounded-lg font-medium text-xs bg-[#68D392] p-3 w-64">
            <FaUserFriends className=" w-10 h-8 mb-4" />
            <p className=" font-bold text-sm">Users</p>
            <p className=" text-lg font-bold">{dashcboadcounts?.userCount}</p>
            <p>Active: </p>
            <p>Paused: </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
