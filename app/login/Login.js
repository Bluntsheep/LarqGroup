"use client";

import Input from "@/components/Input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { UserProvider } from "./context/userContext";

export default function Home() {
  const router = useRouter();

  const username = useRef();
  const password = useRef();

  const error = useState(false);

  const users = [
    { name: "sion", password: "5104" },
    { name: "richard", password: "123" },
  ];

  const login = () => {
    const user = username.current.value;
    const pass = password.current.value;

    users.map((item) => {
      if (item.name === user && item.password === pass) {
        router.push("/dashboard");
      } else {
        console.log("Incorrect");
      }
    });
  };

  return (
    <UserProvider>
      <div className=" flex">
        <div className=" w-[60%] h-[100dvh] bg-gradient-to-r from-slate-600 to-slate-400"></div>
        <div className=" w-[40%] content-center justify-items-center bg-slate-300">
          <form action={login}>
            <div>
              <p className=" font-bold text-slate-500 text-4xl mb-10">Login</p>
              <div>
                <p className=" text-slate-700 font-semibold text-xs mb-2">
                  Login
                </p>
                <Input reffName={username} placeholder="User Name" />
              </div>
              <div className=" mt-5">
                <p className=" text-slate-700 font-semibold text-xs mb-2">
                  Password
                </p>
                <Input
                  reffName={password}
                  type="password"
                  placeholder="Password"
                />
              </div>
              <Button className="mt-5 size-15">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </UserProvider>
  );
}
