import React from "react";
import { FaPause, FaPlay } from "react-icons/fa";

const TableCells = ({ header, users, userStatus, index, updateActive }) => {
  const isVissable = header;
  const object = users;
  const userStatusValue = userStatus;

  return (
    <div
      className={`flex flex-wrap cursor-default gap-2 text-xs ${
        isVissable && "hover:bg-slate-200 items-center"
      }`}>
      <div className=" pr-2 w-10 border-r-2  ">{object.userId}</div>
      <div className=" pr-2 w-28 border-r-2">{object.name}</div>
      <div className=" pr-2 w-12 border-r-2">{object.roll}</div>
      <div className=" pr-2 w-20 border-r-2">{object.cell}</div>
      <div className=" pr-2 w-48 border-r-2">{object.email}</div>
      <div className=" flex-grow" />
      {isVissable && (
        <div className=" flex gap-2">
          <div
            onClick={() => updateActive(object.userId)}
            className=" text-slate-600 p-1 rounded-lg text-xs font-semibold ml-3 hover:text-slate-950">
            {userStatusValue ? <FaPause /> : <FaPlay />}
          </div>
        </div>
      )}
    </div>
  );
};

export default TableCells;
