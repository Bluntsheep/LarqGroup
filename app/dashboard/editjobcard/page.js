"use client";

import React, { useEffect, useRef, useState } from "react";
import Input from "../../../components/Input";
import { Button } from "../../../components/ui/button";
import { useUserContext } from "@/context/userContext";
import Image from "next/image";
import ImageUploadButton from "@/components/ui/imageUploadButton";

const UpdateJobcard = () => {
  const { user, setUser } = useUserContext();
  const { selectedJObCard, setSelectedJobCard } = useUserContext();

  const purchasedAt = useRef();
  const divission = useRef();
  const qty = useRef();
  const description = useRef();
  const value = useRef();

  const [itemsToAdd, setItemsToAdd] = useState([]);

  const [currentJobCardDetails, setCurrentJobCardDetails] = useState([]);

  console.log(currentJobCardDetails);

  const updateItems = () => {
    const newItem = {
      userId: user.userId,
      purchasedAt: purchasedAt.current.value,
      divission: divission.current.value,
      qty: qty.current.value,
      description: description.current.value,
      value: Number(value.current.value),
    };
    setItemsToAdd((prev) => [...prev, newItem]);
  };

  const processJobCard = async () => {
    if (currentJobCardDetails) {
      itemsToAdd.map((newItem, index) => {
        setCurrentJobCardDetails((prev) => [...prev, newItem]);
      });
    } else {
      setCurrentJobCardDetails(itemsToAdd);
    }

    console.log(currentJobCardDetails.items);
    const response = await fetch("../api/updatejobcard", {
      method: "POST",
      body: JSON.stringify({
        jobCardNo: selectedJObCard.jobCardNo,
        items: itemsToAdd,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("success", result);
    } else {
      console.log("Error", response.statusText);
    }

    setItemsToAdd([]);
  };

  const handleRemove = (indexToRemove) => {
    const updatedItems = itemsToAdd.filter(
      (_, index) => index !== indexToRemove
    );
    setItemsToAdd(updatedItems);
  };

  useEffect(() => {
    setCurrentJobCardDetails(selectedJObCard.items);
  }, []);

  return (
    <div>
      <p className=" text-sm font-bold">{selectedJObCard.jobCardNo}</p>
      <p className=" text-xs font-bold mt-3 mb-1">Client Details</p>
      <div>
        <p className=" text-xs">Company:{selectedJObCard.companyName}</p>
        <p className=" text-xs">Contact:{selectedJObCard.contact}</p>
        <p className=" text-xs">Cell:{selectedJObCard.number}</p>
        <p className=" text-xs">Email:{selectedJObCard.email}</p>
        <p className=" text-xs">Installation @ {selectedJObCard.location}</p>
        <p className=" text-xs">Details: {selectedJObCard.details}</p>
      </div>
      <p className=" mt-3 text-xs font-bold">Add Item</p>
      <div className=" flex gap-5 mt-3">
        <Input reffName={purchasedAt} placeholder="Purchased from" />
        <Input reffName={divission} placeholder="Division" />
        <Input reffName={qty} placeholder="QTY" />
        <Input reffName={description} placeholder="Description" />
        <Input reffName={value} placeholder="Value" />
        <Button onClick={() => updateItems()}>Add Item</Button>
      </div>
      <p className=" text-xs font-bold mt-3">To be added</p>

      <div className=" p-3 overflow-hidden border-2 rounded-lg border-slate-300">
        {itemsToAdd.map((item, i) => {
          return (
            <>
              <div key={i} className=" flex text-xs ">
                <div className=" mr-3"> {item.divission} </div>
                <div className=" text-xs ">
                  {item.qty} x {item.description}
                </div>
                <div className=" flex flex-grow text-xs " />
                <div>R{item.value}</div>
                <div onClick={() => handleRemove(i)} className=" ml-3">
                  <Image
                    src="/Remove.svg"
                    width={20}
                    height={20}
                    alt="Picture of the author"
                  />
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className=" flex align-middle items-center object-center gap-8 mt-4">
        <ImageUploadButton />
        <Button onClick={() => processJobCard()}>Process</Button>
      </div>
      <div className=" mt-6">
        <p className=" text-xs font-bold">Existing Items on Job</p>
        <div className=" p-3 overflow-hidden border-2 rounded-lg border-slate-300">
          {currentJobCardDetails?.map((item, index) => {
            return (
              <div key={index} className=" flex text-xs ">
                <div className=" mr-3"> {item?.userId} </div>
                <div className=" mr-3"> {item?.purchasedAt} </div>
                <div className=" mr-3"> {item?.divission} </div>
                <div className=" mr-3"> {item?.description} </div>
                <div className=" text-xs ">
                  {item?.qty} x {item?.description}
                </div>
                <div className=" flex flex-grow text-xs " />
                <div>R{item?.value}</div>
              </div>
            );
          })}
          <div className=" flex mt-3 font-bold">
            <div className=" flex-grow" />
            <div>
              Total: R
              {currentJobCardDetails?.reduce(
                (acc, obj) => acc + obj.value * 1,
                0
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateJobcard;
