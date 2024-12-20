"use client";

import Input from "@/components/Input";
import { Button } from "@/components/ui/button";
import React, { useEffect, useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { SelectTrigger, SelectValue } from "@radix-ui/react-select";

import { useUserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const [clients, setClients] = useState(["Sion"]);
  const [jobs, setJobs] = useState(["Sion"]);
  const [isOpen, setIsOpen] = useState(true);
  const address = useRef();
  const details = useRef();
  const currentDate = new Date();
  const newDate = currentDate.toLocaleDateString("en-ZA");

  console.log(newDate);

  const { user, setUser } = useUserContext();
  const { selectedJObCard, setSelectedJobCard } = useUserContext();

  const createdBy = user.userId;

  const [clientDetails, setClientDetails] = useState();

  const toggleOPen = () => {
    setIsOpen((prev) => !prev);
  };

  const createJobCard = async () => {
    const jobcardData = {
      jobCardNo: `JC${String(jobs.length + 1).padStart(4, "0")}`,
      dateCreated: newDate,
      createdBy: createdBy,
      companyName: clientDetails.companyName,
      contact: clientDetails.contacts.clientName,
      number: clientDetails.contacts.contactDetails,
      email: clientDetails.contacts.emailDetails,
      location: address.current.value,
      details: details.current.value,
      status: "open",
    };

    console.log(jobcardData);

    const response = await fetch("../api/jobs", {
      method: "POST",
      body: JSON.stringify(jobcardData),
    });
    if (response.ok) {
      const result = await response.json();
      console.log("success", result);
      setJobs((prev) => [...prev, result]);
    } else {
      console.log("Error", response.statusText);
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
        setClients(result);
      } catch (error) {
        console.error("Error fetching Data", error);
      }
    };

    const fetchJobCards = async () => {
      try {
        const response = await fetch("../api/jobs");
        if (!response.ok) {
          throw new Error("Failed to fetch Data");
        }
        const result = await response.json();
        console.log(result);

        setJobs(result);
      } catch (error) {
        console.error("Error fetching Data", error);
      }
    };

    fetchClients();
    fetchJobCards();
  }, []);

  const handleClick = (selectedJob) => {
    setSelectedJobCard(selectedJob);
    router.push("/dashboard/editjobcard");
    console.log("this is the selected job", selectedJob);
  };

  return (
    <div>
      <div className=" mb-5">
        <Button onClick={toggleOPen}>
          {isOpen ? "New Job Card" : "Close"}
        </Button>
      </div>
      <div className={`${!isOpen ? null : "hidden"}`}>
        <p className=" font-semibold text-xs">Select Client</p>
        <div className=" font-semibold">
          <Select onValueChange={(value) => setClientDetails(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Clients" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {clients.map((client, index) => {
                  return (
                    <SelectItem key={index} value={client}>
                      {client.companyName}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className=" w-[80%] gap-4 flex flex-col font-semibold text-xs">
          <div>
            <p className=" mt-2">Job Address</p>
            <Input reffName={address} placeholder="Address" />
          </div>
          <div>
            <p className=" mt-2">Description</p>
            <Input reffName={details} placeholder="Description" />
          </div>
          <div>
            <Button onClick={createJobCard}>Create Jobcard</Button>
          </div>
        </div>
      </div>
      <p className=" font-bold mt-5">Job List</p>
      <div className=" mt-3 p-3 overflow-hidden border-2 rounded-lg border-slate-300">
        {jobs.map((job, index) => {
          return (
            <div
              onClick={() => handleClick(job)}
              className=" text-xs font-semibold hover:bg-slate-200 p-1 rounded-lg cursor-pointer"
              key={index}>
              {job.dateCreated} {job.jobCardNo} {job.companyName} {job.location}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
