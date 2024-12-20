import React from "react";

const page = () => {
  return (
    <div>
      <p className=" font-bold">Quotes</p>
      <p className=" font-medium text-xs">Still to invoice</p>
      <div className=" flex mt-3 p-3 overflow-hidden border-2 rounded-lg border-slate-300 font-medium text-xs">
        <p>job Number</p>
        <p>Client Name</p>
        <p>Completed on</p>
        <p>PROCESS</p>
      </div>
    </div>
  );
};

export default page;
