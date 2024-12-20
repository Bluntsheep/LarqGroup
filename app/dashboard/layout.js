"use client";

import SideBar from "@/components/ui/SideBar";
import { useUserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const layout = ({ children }) => {
  const router = useRouter();
  const { user, setUser } = useUserContext();

  console.log(user);

  useEffect(() => {
    if (!user) {
      router.push("/");
    } else {
      null;
    }
  });

  return (
    <div>
      {!user ? null : (
        <div>
          <SideBar />
          <main className=" ml-[200px] mr-[100px] pt-14">{children}</main>
        </div>
      )}
    </div>
  );
};

export default layout;
