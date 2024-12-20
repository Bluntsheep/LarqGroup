"use client";
import React, { useEffect, useRef, useState } from "react";
import Input from "../../../components/Input";
import { Button } from "../../../components/ui/button";
import TableCells from "../../../components/tableCells/TableCells";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { FaPlusCircle, FaPlusSquare } from "react-icons/fa";

const AddUsers = () => {
  const name = useRef();
  const surname = useRef();
  const cell = useRef();
  const email = useRef();
  const password = useRef();
  const [roll, setRoll] = useState();

  const rolls = ["User", "Manager", "Admin"];

  const headerBlock = {
    userId: "ID",
    name: "NAME",
    roll: "ROLE",
    cell: "CELL",
    email: "EMAIL",
    active: true,
  };

  const [userList, setUserList] = useState([]);

  const userIsActive = userList.filter((item) => item.active);

  const userIsInactive = userList.filter((item) => !item.active);

  const pauseUser = (id) => {
    setUserList((prev) =>
      prev.map((item, i) =>
        item.userId === id ? { ...item, active: !item.active } : item
      )
    );
  };

  const addNewUser = async () => {
    const newID =
      name.current.value.slice(0, 1) +
      surname.current.value.slice(0, 1) +
      cell.current.value.slice(-2);

    const userAdd = {
      userId: newID,
      name: name.current.value + " " + surname.current.value,
      cell: cell.current.value,
      email: email.current.value,
      password: password.current.value,
      roll: Number(roll),
      active: true,
    };

    const existingUser = userList.some((user) => user.userId === newID);

    if (existingUser) {
      return;
    } else {
      const response = await fetch("../api/users", {
        method: "POST",
        body: JSON.stringify(userAdd),
      });

      if (response.ok) {
        const result = await response.json();

        setUserList((prev) => [...prev, userAdd]);
      } else {
        console.log("Error", response.statusText);
      }
    }
  };

  const changeStatus = async (currentUserID) => {
    const updateUser = await fetch("../api/users", {
      method: "PATCH",

      body: JSON.stringify(currentUserID),
    });
    pauseUser(currentUserID);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("../api/users");
        if (!response.ok) {
          throw new Error("Failed to fetch Data");
        }
        const result = await response.json();
        setUserList(result);
      } catch (error) {
        console.error("Error fetching Data", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <p className="font-semibold mb-3">Add new user</p>
      <div className=" flex gap-5 items-center">
        <div>
          <Input reffName={name} placeholder="Name" />
        </div>
        <div>
          <Input reffName={surname} placeholder="Surname" />
        </div>
        <div>
          <Input reffName={cell} placeholder="Cell" />
        </div>
        <div>
          <Input reffName={email} placeholder="Email" />
        </div>
        <div>
          <Input reffName={password} placeholder="Password" />
        </div>
        <Select onValueChange={(value) => setRoll(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="1052">Admin</SelectItem>
              <SelectItem value="2052">Manager</SelectItem>
              <SelectItem value="5052">Contractor</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <FaPlusCircle
          className=" w-8 h-8 text-slate-500"
          onClick={addNewUser}
        />
      </div>

      <div className=" mt-5">
        <p>Active Users</p>
        <div className=" p-3 overflow-hidden border-2 rounded-lg border-slate-300">
          <TableCells users={headerBlock} userStatus={true} />
          <hr className=" my-1" />
          {userIsActive.map((item, index) => {
            return (
              <TableCells
                updateActive={changeStatus}
                index={item.userId}
                header={true}
                key={item.userId}
                users={item}
                userStatus={true}
              />
            );
          })}
        </div>
        <p className=" mt-3">Disabled Users</p>
        <div className=" p-3 overflow-hidden border-2 rounded-lg border-slate-300">
          <TableCells users={headerBlock} userStatus={true} />
          <hr className=" my-1" />
          {userIsInactive.map((item, index) => {
            return (
              <TableCells
                updateActive={changeStatus}
                index={item.userId}
                header={true}
                key={item.userId}
                users={item}
                userStatus={false}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AddUsers;
