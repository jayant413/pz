"use client";
import { api } from "@/helper/api";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    console.log(localStorage.getItem("loggedIn"));
    if (localStorage.getItem("loggedIn") == "true") {
      router.push("/test-page");
    }
  }, []);

  const onSubmit = async () => {
    const response = await axios.post(`${api}/login`, {
      userName: username,
      password: password,
    });

    if (response.data.success) {
      router.push("/test-page");
      localStorage.setItem("loggedIn", "true");
    }
  };

  return (
    <div>
      <header className="bg-white h-[4rem] w-[100vw] flex justify-start items-center">
        <div className="flex w-[50%] justify-center items-center">
          <a href="/login">
            {" "}
            <img src="img/Logo.png" alt="logo" />
          </a>
        </div>
        <div className="w-[50%] justify-end flex pr-10">&nbsp;</div>
      </header>
      <main className="relative flex">
        <img
          src="img/bg.jpg"
          alt=""
          className=" h-[calc(100vh - 4rem)] w-[65%] "
        />
        <div
          className="bg-white text-gray-600 w-[30rem] h-[30rem]  flex flex-col gap-y-8 
          absolute rounded-xl right-[20vw] top-[10vh] justify-center items-center"
        >
          <div className="flex justify-center text-gray-500 items-center text-xl uppercase">
            <a href="/login" className="">
              Register
            </a>
            <span className="mx-5">|</span>
            <a href="/login">Login</a>
          </div>
          <div className="flex flex-col w-[80%] gap-y-3">
            <input
              type="text"
              placeholder="Username"
              value={username}
              className="p-2 bg-transparent border-b-2 border-gray-500 outline-none"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="password"
              className="p-2 bg-transparent border-b-2 border-gray-500 outline-none"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <button
              className="bg-gray-200 hover:bg-gray-400 p-3 rounded-xl hover:text-white"
              onClick={() => {
                onSubmit();
                // router.push("/test-page");
              }}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="gray-background bg-gray-600 h-[calc(100vh - 4rem)] w-[35%]"></div>
      </main>
    </div>
  );
};

export default Login;
