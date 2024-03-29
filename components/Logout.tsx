"use client";

import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          localStorage.removeItem("loggedIn");
          localStorage.removeItem("username");
          router.push("/login");
        }}
        className="bg-gray-200 hover:bg-gray-400 p-3 rounded-xl hover:text-white"
      >
        LogOut
      </button>
    </div>
  );
};

export default Logout;
