import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSlider = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className="upper-bar">
        <div className="w-full h-[50px] bg-[#F7FF62] flex justify-center items-center">
          <div className="center-bar h-[26] flex items-center  text-sm gap-[16px]">
            <p>World best online tutors platform</p>

            <div className="flex w-fit h-fit gap-[8px]">
              <button className="px-3 py-1 border rounded-[5px] text-xs  hover:bg-black hover:text-white">
                Login as Tutor
              </button>
              <button className="px-2 py-1 rounded-[5px] text-xs bg-black text-white">
                Register as Tutor
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="lower-bar">
        <div className="w-full h-[100px] flex items-center justify-between px-[20px] sm:px-[100px] mb-[35px] border-6 border-[#BEBEBE40] ">
          <div className="flex items-center gap-[10px]">
            <img src="/online-education-light.png" alt="Logo" />
            <h1 className="font-bold text-2xl">FindTutors</h1>
          </div>
          <div className="nav flex gap-[10px]">
            <div className="flex items-center">
              <FaBars
                className="lg:hidden cursor-pointer"
                onClick={toggleSlider}
              />
              <div className="hidden lg:flex items-center">
                <p className="px-[20px] hover:bg-[#F6F6F6]  py-[10px] text-center">
                  Home
                </p>
                <p className="px-[20px] hover:bg-[#F6F6F6] py-[10px]">
                  Subjects
                </p>
                <p className="px-[20px] hover:bg-[#F6F6F6] py-[10px]">
                  Courses
                </p>
                <p className="px-[20px] hover:bg-[#F6F6F6] py-[10px]">
                  Request a tutor
                </p>
                <p className="px-[20px] hover:bg-[#F6F6F6] py-[10px]">More ∨</p>
              </div>
            </div>
            <div className="flex gap-[10px]">
              <button className="border  w-[80px] py-[4px] rounded-[5px] hover:bg-black hover:text-white transition-all duration-300">
                Login
              </button>
              <button className="border w-[96px] py-[4px] text-white bg-black rounded-[5px]">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Slider */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white text-xs shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <p className="px-[20px] hover:bg-[#F6F6F6]  py-[10px] text-center">
            Home
          </p>
          <p className="px-[20px] hover:bg-[#F6F6F6] py-[10px]">Subjects</p>
          <p className="px-[20px] hover:bg-[#F6F6F6] py-[10px]">Courses</p>
          <p className="px-[20px] hover:bg-[#F6F6F6] py-[10px]">
            Request a tutor
          </p>
          <p className="px-[20px] hover:bg-[#F6F6F6] py-[10px]">More ∨</p>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSlider}
        ></div>
      )}
    </>
  );
}
