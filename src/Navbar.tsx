import React from "react";

export default function Navbar() {
  return (
    <>
      <section className="upper-bar">
        <div className="w-full h-[50px] bg-[#F7FF62] flex justify-center items-center">
          <div className="center-bar w-[453px] h-[26] flex items-center  text-sm gap-[16px]">
            <p>World best online tutuors platform</p>

            <div className="flex w-fit h-fit gap-[8px]">
              <button className=" w-[79] h-[14] px-3 py-1 border rounded-[5px] text-xs  hover:bg-black hover:text-white">
                Login as Tutor
              </button>
              <button className="  w-[89] h-[14] px-2 py-1  rounded-[5px] text-xs bg-black text-white">
                Register as Tutor
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="lower-bar">
        <div className="w-full h-[100px] flex items-center">
          <div className="ml-[100px] my-[32px] flex items-center gap-[10px]">
            <img src="/Online Education.png" />
            <h1 className="font-bold text-2xl">FindTutors</h1>
          </div>
          <div className=" nav flex gap-[10px] ml-[350px]">
            <p className="px-[20px] hover:bg-[#F6F6F6]  py-[10px]">Home</p>
            <p className="px-[20px] hover:bg-[#F6F6F6] py-[10px]">Subjects</p>
            <p className="px-[20px] hover:bg-[#F6F6F6] py-[10px]">Courses</p>
            <p className="px-[20px] hover:bg-[#F6F6F6] py-[10px]">
              Request a tutor
            </p>
            <p className="px-[20px] hover:bg-[#F6F6F6] py-[10px]">More ∨</p>
          </div>
          <div className="flex gap-[10px] ml-[30px] mr-[100px]">
            <button className="border  w-[80px] py-[8px] rounded-[5px] hover:bg-black hover:text-white transition-all duration-300">
              Login
            </button>
            <button className="border w-[96px] py-[8px] text-white bg-black rounded-[5px]">
              Sign Up
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
