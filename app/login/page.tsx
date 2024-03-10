"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [passwrod, setPassword] = useState("");

  return (
    <div>
      <main className="relative flex">
        <img
          src="img/bg.jpg"
          alt=""
          className=" h-[calc(100vh - 4rem)] w-[65%] "
        />
        <form
          action=""
          className="bg-white text-gray-600 w-[30rem] h-[30rem]  flex flex-col gap-y-8 
          absolute rounded-xl right-[20vw] top-[10vh] justify-center items-center"
        >
          <div className="flex justify-center items-center text-xl uppercase">
            {" "}
            <a href="/login" className="text-gray-400">
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
              value={passwrod}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <button
              //   type="submit"
              className="bg-gray-200 hover:bg-gray-400 p-3 rounded-xl hover:text-white"
              onClick={() => {
                router.push("/test-page");
              }}
            >
              Submit
            </button>
          </div>
        </form>
        <div className="gray-background bg-gray-600 h-[calc(100vh - 4rem)] w-[35%]"></div>
      </main>
    </div>
  );
};

export default Login;
