import React from "react";

export default function Hero() {
  return (
    <div className="md:w-full bg-black h-[637px] flex text-white px-[70px] py-[70px] mb-[100px]">
      <div className="flex flex-col gap-[30px] w-[45%] ">
        <h1 className="text-[45px] font-bold">
          The Best Free Online Tutor oF All Time
        </h1>
        <p className="text-xs">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum fugiat nulla pariatur
        </p>
        <div className="flex  justify-between">
          <div className="w-[250px] h-[55px] border border-white flex items-center justify-between px-3">
            <h1>Select Subjects</h1>
            <span>∨</span>
          </div>
          <div className="w-[250px] h-[55px] border border-white flex items-center justify-between px-3 ">
            <h1>Your Class</h1>
            <span>∨</span>
          </div>
        </div>
        <span className="text-[#F7FF62] text-center">OR</span>

        <div className="w-full h-[55px] border border-white flex items-center justify-between px-3">
          <h1>Select Course</h1>
          <span>∨</span>
        </div>

        <div className="w-full h-[55px] bg-[#FFD25D] flex items-center justify-center text-black">
          <h1>FIND TUTORS</h1>
        </div>
      </div>

      <div className="flex items-center justify-center ml-[30px]">
        <img src="/Group.png"/>
      </div>
      <div className="relative ml-[40px] flex">
        <img className="w-[466px] h-[597px]" src="/Group 1.png"/>
      
        <img className="absolute top-[-32px] right-[-33px] " src="/Group 3.png"/>

      </div>
      
    </div>
  );
}
