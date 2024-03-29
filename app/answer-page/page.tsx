"use client";
import Header from "@/components/Header";
import { correctStatements } from "@/helper/constant";
import { useRouter } from "next/navigation";

const Test = () => {
  const router = useRouter();
  return (
    <div>
      <Header />
      <div className="bg-gray-600 w-full h-[calc(100vh-4rem)] p-[auto] flex justify-center items-center">
        <div className="bg-gray-500 h-[80%] w-[40%] rounded-xl flex flex-col justify-center items-start gap-y-16">
          <div className="flex  text-xl w-full justify-center items-start text-white">
            <span> Answers </span>
          </div>
          <div className="flex  justify-center items-start w-full">
            <div className="flex flex-col gap-y-4 text-white">
              {correctStatements.map((s, i) => {
                return (
                  <span key={i} className="border-b-2 pb-3">
                    {s}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="w-full justify-center flex">
            <button
              className="bg-gray-300 hover:bg-gray-700 hover:text-white text-gray-900 px-12 py-2 rounded-xl"
              onClick={() => {
                router.push("/test-page");
              }}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
