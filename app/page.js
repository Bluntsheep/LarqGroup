"use client";

import Input from "@/components/Input";
import { Button } from "@/components/ui/button";
import { useUserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function Home() {
  const { user, setUser } = useUserContext();

  const admin = {
    name: "info@larqgroup.co.za",
    password: "Tr@ckmyLarq2024",
    userId: "CG23",
    role: 9999,
  };

  const router = useRouter();

  const username = useRef();
  const password = useRef();

  const [error, setError] = useState(false);

  const login = async () => {
    const user = username.current.value;
    const pass = password.current.value;

    if (user === admin.name && pass === admin.password) {
      setUser({ name: admin.name, role: admin.roll, userId: "CG36" });
      router.push("/dashboard");
      return;
    }

    const response = await fetch("./api/auth", {
      method: "POST",
      body: JSON.stringify({ user: user, password: pass }),
    });

    if (response.status === 200) {
      const responseBody = await response.json();
      const users = {
        name: responseBody.name,
        role: responseBody.role,
        userId: responseBody.userId,
      };
      setUser(users);
      router.push("/dashboard");
    }
    if (response.status === 403) {
      setError((prev) => !prev);
    }
    console.log(response.status);
  };

  return (
    <div className=" flex">
      <div className=" w-[60%] h-[100dvh] bg-gradient-to-r from-slate-600 to-slate-400"></div>
      <div className=" w-[40%] content-center justify-items-center bg-slate-300">
        <form action={login}>
          <div>
            <p className=" font-bold text-slate-500 text-4xl mb-10">Login</p>
            <div>
              {error ? (
                <p className=" text-slate-700 font-semibold text-xs mb-2">
                  Your Account has been paused
                </p>
              ) : (
                <p className=" text-slate-700 font-semibold text-xs mb-2">
                  Login
                </p>
              )}
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
  );
}
