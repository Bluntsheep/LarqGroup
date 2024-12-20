import React from "react";

const jobcards = () => {
  const openJobCards = [];

  return (
    <div>
      <p className=" text-xs font-bold ">Open Jobcards</p>
      <div className=" mt-3 py-3 overflow-hidden border-2 rounded-lg border-slate-300">
        <div className=" hover:bg-slate-200 pl-3 py-1 mb-1">
          <p className=" text-xs">Current Job</p>
        </div>
        <div className=" hover:bg-slate-200 pl-3 py-1 mb-1">
          <p className=" text-xs">Current Job</p>
        </div>
        <div className=" hover:bg-slate-200 pl-3 py-1 mb-1">
          <p className=" text-xs">Current Job</p>
        </div>
      </div>
    </div>
  );
};

export default jobcards;
