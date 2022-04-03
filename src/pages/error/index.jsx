import React from "react";
import { HiArrowLeft, HiHome } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center w-full h-[100vh]  text-center gap-4">
      <h1 className="text-5xl">404 not found</h1>
      <div className="flex flex-row">
        <button
          className="flex items-center gap-2 p-4 pl-6 pr-6 text-indigo-800 align-bottom bg-indigo-200 rounded-xl"
          onClick={() => {
            navigate(-1);
          }}
        >
          {" "}
          <HiArrowLeft />
          go back
        </button>
        <button className="flex items-center gap-2 p-4 pl-6 pr-6 text-indigo-800 align-bottom bg-indigo-200 rounded-xl">
          {" "}
          <HiHome />
          <Link to="/">go home</Link>
        </button>
      </div>
    </div>
  );
}
