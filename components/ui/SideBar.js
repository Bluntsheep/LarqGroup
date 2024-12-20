"use client";

import { useUserContext } from "@/context/userContext";
import Link from "next/link";
import React, { useState } from "react";
import { FaHome, FaThList, FaUserFriends, FaUser } from "react-icons/fa";

const SideBar = () => {
  const { user, setUser } = useUserContext();

  const adminItems = [
    { name: "Home", rout: "/dashboard", icon: <FaHome /> },
    { name: "Clients", rout: "/dashboard/clients", icon: <FaUser /> },
    // { name: "Job Cards", rout: "/dashboard/editjobcard" },
    // { name: "Quotes", rout: "/dashboard/quotes" },
    { name: "Jobs", rout: "/dashboard/jobs", icon: <FaThList /> },
    { name: "Users", rout: "/dashboard/users", icon: <FaUserFriends /> },
  ];

  const [headerText, setHeaderText] = useState("Dashboard");

  return (
    <div className=" flex min-w-[170px] overflow-hidden fixed">
      <div className=" flex flex-col text-xl justify-items-center h-[100dvh] bg-slate-700 min-w-[170px] w-[10%] p-5">
        <p className=" cursor-default font-bold text-slate-400">{headerText}</p>
        <hr className=" my-3 w-[100%] border-slate-500" />
        {adminItems.map((item, index) => {
          return (
            <div key={index}>
              <Link onClick={() => setHeaderText(item.name)} href={item.rout}>
                {" "}
                <div className=" flex mt-3 pl-2 cursor-pointer w-[100%] p-1 hover:bg-gradient-to-r from-slate-500 to-slate-400 rounded-md">
                  <div className=" mr-3 text-slate-300">{item.icon}</div>
                  <p className="font-semibold text-sm text-slate-300">
                    {item.name}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
        <div className=" flex-grow"></div>
        <p className=" pl-2 font-semibold text- text-slate-400">{user.name}</p>
        <div className="mb-1 pl-2 cursor-pointer w-[100%] p-1 hover:bg-gradient-to-r from-slate-500 to-slate-400 rounded-md">
          {/* <p className="font-semibold text-sm text-slate-300">Profile</p> */}
        </div>
        <Link href="/">
          <div className="mb-10 pl-2 cursor-pointer w-[100%] p-1 hover:bg-gradient-to-r from-slate-500 to-slate-400 rounded-md">
            <p className="font-semibold text-sm text-slate-300">Log out</p>
          </div>
        </Link>
        <p className=" font-medium text-xs text-white">Version:1.01</p>
      </div>
    </div>
  );
};

export default SideBar;
