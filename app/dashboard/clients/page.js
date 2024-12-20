"use client";

import Input from "@/components/Input";
import { Button } from "@/components/ui/button";
import React, { useEffect, useRef, useState } from "react";

const Addclient = () => {
  const [isVissable, setIsVissable] = useState(true);
  const company = useRef();
  const clientName = useRef();
  const cell = useRef();
  const email = useRef();
  const vat = useRef();
  const customID = useRef();

  const street = useRef();
  const street2 = useRef();
  const town = useRef();
  const postalCode = useRef();

  const [clients, setClient] = useState([]);
  const [idVissable, setIDVissable] = useState(false);

  const toggle = () => {
    setIsVissable((prev) => !prev);
  };

  const idToggle = () => {
    setIDVissable((prev) => !prev);
  };

  const addClientDatabse = async (customerDetaisl) => {
    const response = await fetch("../api/clients", {
      method: "POST",
      body: JSON.stringify(customerDetaisl),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("success", result);
    } else {
      console.log("Error", response.statusText);
    }
  };

  const handleAdd = (e, updateID) => {
    e.preventDefault();
    let newID = company.current.value
      .split(" ")
      .map((part) => part.charAt(0).toUpperCase())
      .join("")
      .slice(0, 4);

    if (updateID) {
      newID = customID.current.value;
      console.log(newID);
    }

    const checkExistingUser = clients.some((client) => client.id === newID);

    const customerDetaisl = {
      companyID: newID,
      companyName: company.current.value,
      vatNo: vat.current.value,
      contacts: {
        clientName: clientName.current.value,
        contactDetails: cell.current.value,
        emailDetails: email.current.value,
      },

      address: {
        street: street.current.value,
        street2: street2.current.value,
        town: town.current.value,
        postalCode: postalCode.current.value,
      },
    };

    if (customerDetaisl.companyName == "") {
      return console.log("No details");
    }
    if (checkExistingUser === true) {
      idToggle();
    } else {
      addClientDatabse(customerDetaisl);

      setClient((prev) => [...prev, customerDetaisl]);
      company.current.value = "";
      clientName.current.value = "";
      cell.current.value = "";
      email.current.value = "";
      vat.current.value = "";
      street.current.value = "";
      street2.current.value = "";
      town.current.value = "";
      postalCode.current.value = "";
      setIDVissable(false);
      toggle();
    }
  };

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch("../api/clients");
        if (!response.ok) {
          throw new Error("Failed to fetch Data");
        }
        const result = await response.json();
        setClient(result);
      } catch (error) {
        console.log(error);
        console.error("Error fetching Data", error);
      }
    };

    fetchClients();
  }, []);

  return (
    <>
      <div>
        <div>
          <p className=" font-bold">New Client</p>
          <button onClick={toggle} className=" font-semibold text-xs">
            {isVissable ? "Add" : "close"}
          </button>
        </div>
      </div>
      <form
        onSubmit={(e) => handleAdd(e)}
        className={`${isVissable && "hidden"}`}>
        <div className=" flex gap-12 content-start">
          <div className=" flex flex-col w-64 gap-3">
            <p className=" text-xs font-medium">Client Details</p>
            <Input reffName={company} placeholder="Company Name" />
            <Input reffName={clientName} placeholder="Client Name " />
            <Input reffName={cell} placeholder="Cell" />
            <Input reffName={email} placeholder="Email" />
            <Input reffName={vat} placeholder="Vat No" />
          </div>
          <div className=" flex flex-col w-64 gap-3">
            <p className=" text-xs font-medium">Address</p>
            <Input reffName={street} placeholder="Street" />
            <Input reffName={street2} placeholder="Complex/Unit/business" />
            <Input reffName={town} placeholder="Town/City" />
            <Input reffName={postalCode} placeholder="Ppostal Code" />
          </div>
        </div>
        <Button className=" text-xs mt-6">Create Client</Button>
      </form>
      <div className={`${!idVissable && "hidden"}`}>
        <p className="text-red-600 font-medium my-2">
          There is currently a company witht the same CompanyId would you like
          to add a custom ID?
        </p>
        <Input reffName={customID} placeholder="Custom ID" />
        <div className=" flex gap-5 mt-4">
          <Button onClick={(e) => handleAdd(e, customID.current.value)}>
            Create
          </Button>
          <Button>Cancell</Button>
        </div>
      </div>
      <p className=" text-xs font-bold mt-8">Existing Clients</p>
      <div className=" mt-3 p-3 overflow-hidden border-2 rounded-lg border-slate-300">
        {clients.map((item, index) => {
          return (
            <div
              key={index}
              className=" flex gap-4 hover:bg-slate-200 px-2 py-1 rounded-full">
              <p className=" text-xs">{item.id}</p>
              <p className=" text-xs">{item.companyName}</p>
              <p className=" text-xs">{item.clientName}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Addclient;
