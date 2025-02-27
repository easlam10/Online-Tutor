import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSlider = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section>
        <div className="w-full h-[100px] flex items-center justify-between px-[20px] sm:px-[100px] mb-[35px] border-b-6 border-[#BEBEBE40]">
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
                <p
                  className="px-[20px] hover:bg-[#8607DD1A] hover:text-[#A435F0] py-[10px] cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  Home
                </p>
                <p
                  className="px-[20px] hover:bg-[#8607DD1A] hover:text-[#A435F0] py-[10px] cursor-pointer"
                  onClick={() => navigate("/subjects")}
                >
                  Subjects
                </p>
                <p
                  className="px-[20px] hover:bg-[#8607DD1A] hover:text-[#A435F0] py-[10px] cursor-pointer"
                  onClick={() => navigate("/courses")}
                >
                  Courses
                </p>
                <p
                  className="px-[20px] hover:bg-[#8607DD1A] hover:text-[#A435F0] py-[10px] cursor-pointer"
                  onClick={() => navigate("/requestatutor")}
                >
                  Request a tutor
                </p>

                {/* More Dropdown */}
                <div className="relative">
                  <p
                    className="px-[20px] hover:bg-[#8607DD1A] hover:text-[#A435F0] py-[10px] cursor-pointer"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    More ∨
                  </p>
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg border py-2">
                      <p
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => navigate("/about")}
                      >
                        About
                      </p>
                      <p
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => navigate("/blog")}
                      >
                        Blog
                      </p>
                      <p
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => navigate("/faqs")}
                      >
                        FAQs
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex gap-[10px]">
              <button className="border w-[80px] py-[4px] rounded-[5px] hover:bg-[#A435F0] hover:text-white transition-all duration-300">
                Login
              </button>
              <button className="border w-[96px] py-[4px] text-white bg-[#A435F0] rounded-[5px]">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Slider */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white text-xs shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <p
            className="px-[20px] hover:bg-[#F6F6F6] py-[10px] cursor-pointer"
            onClick={() => navigate("/")}
          >
            Home
          </p>
          <p
            className="px-[20px] hover:bg-[#F6F6F6] py-[10px] cursor-pointer"
            onClick={() => navigate("/subjects")}
          >
            Subjects
          </p>
          <p
            className="px-[20px] hover:bg-[#F6F6F6] py-[10px] cursor-pointer"
            onClick={() => navigate("/courses")}
          >
            Courses
          </p>
          <p
            className="px-[20px] hover:bg-[#F6F6F6] py-[10px] cursor-pointer"
            onClick={() => navigate("/requestatutor")}
          >
            Request a tutor
          </p>
          <p className="px-[20px] hover:bg-[#F6F6F6] py-[10px] cursor-pointer">
            More ∨
          </p>
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
