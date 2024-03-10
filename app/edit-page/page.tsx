"use client";
import Header from "@/components/Header";
import { api } from "@/helper/api";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState, ChangeEvent } from "react";

const Edit = () => {
  const router = useRouter();
  const [statements, setStatements] = useState<string[]>([]);

  const fetchStatements = async () => {
    const response = await axios.post(`${api}/get-statements`, {
      userName: localStorage.getItem("userName"),
    });

    setStatements(response?.data?.statements);
  };

  const handleInputChange = (index: number, event: any) => {
    const newStatements: string[] = [...statements]; // Explicitly specifying type
    newStatements[index] = event.target.value;
    setStatements(newStatements);
  };

  useEffect(() => {
    fetchStatements();
  }, []);

  const handleEditStatements = async () => {
    const response = await axios.post(`${api}/edit-statements`, {
      userName: localStorage.getItem("userName"),
      statements: statements,
    });

    if (response.data.success) {
      router.push("/test-page");
    }
  };

  return (
    <div>
      <Header />
      <div className="bg-gray-600 w-full h-[calc(100vh-4rem)] p-[auto] flex justify-center items-center">
        <div className="bg-gray-500 h-[80%] w-[40%] rounded-xl flex flex-col justify-center items-start gap-y-16">
          <div className="flex  text-xl w-full justify-center items-start text-white">
            <span> Edit Statements</span>
          </div>
          <div className="flex  justify-center items-start w-full">
            <div className="flex flex-col gap-y-4 text-white">
              {statements.map((s, i) => {
                return (
                  <textarea
                    value={s}
                    key={i}
                    onChange={(event) => handleInputChange(i, event)}
                    className="outline-none px-4 py-2 bg-transparent w-full border-b-2"
                  />
                );
              })}
            </div>
          </div>
          <div className="w-full justify-center flex">
            <button
              className="bg-gray-300 hover:bg-gray-700 hover:text-white text-gray-900 px-12 py-2 rounded-xl"
              onClick={() => {
                handleEditStatements();
              }}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
