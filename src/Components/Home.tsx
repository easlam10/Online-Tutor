import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import Hero from "./Hero";
import Working from "./Working";


export default function () {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="px-[100px]">
          <Hero />
          <Working />
        </div>
        <Footer />
      </div>
    </>
  );
}
