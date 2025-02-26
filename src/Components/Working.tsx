import React from "react";

export default function Working() {
  return (
    <div className="w-full h-[660px] flex justify-between">
      <div className="flex w-[45%] flex-col gap-[15px]">
        <h1 className="text-3xl font-bold ">How It Works</h1>
        <p>
          ETutors is the ideal place for students to find a specialized tutor in
          the subject (s) they struggle with the most. We have qualified and
          experienced male & female home and online teachers for all the major
          subjects includingEnglish, Urdu, Biology, Chemistry, Computer Science,
          Physics and Maths , for any grade/class or level including
          Matriculation, HSSC, A/O levels, IGCSE, IETLS/TOEFL, and more. Whether
          home tutoring or online tutoring services are required, finding the
          best suitable tutor is so simple:
        </p>
        <img src="/listening.png" />
      </div>

      <div className="py-[40px] w-[45%] flex flex-wrap gap-[36px]">
        <div className="flex flex-col  w-[45%] gap-[15px] px-[25px] py-[40px] border border-[#E3E3E3] rounded-[10px]">
            <img className="w-[64px] h-[64px]" src="glass.png" />
            <h1 className="text-2xl font-bold">1. Select Subject</h1>
            <p>Find the best suitable tutor for any subject according to your requirements. Simply go to the search tutors page.</p>
        </div>
        <div className="flex flex-col  w-[45%] gap-[15px] px-[25px] py-[40px] border border-[#E3E3E3] rounded-[10px]">
            <img className="w-[64px] h-[64px]" src="star.png" />
            <h1 className="text-2xl font-bold">1. Search a Tutor</h1>
            <p>Find the best suitable tutor for any subject according to your requirements. Simply go to the search tutors page.</p>
        </div>
        <div className="flex flex-col  w-[45%] gap-[15px] px-[25px] py-[40px] border border-[#E3E3E3] rounded-[10px]">
            <img className="w-[64px] h-[64px]" src="briefcase.png" />
            <h1 className="text-2xl font-bold">1. Schedule Trial Case</h1>
            <p>Find the best suitable tutor for any subject according to your requirements. Simply go to the search tutors page.</p>
        </div>
        <div className="flex flex-col  w-[45%] gap-[15px] px-[25px] py-[40px] border border-[#E3E3E3] rounded-[10px]">
            <img className="w-[64px] h-[64px]" src="book.png" />
            <h1 className="text-2xl font-bold">1. Start Learning</h1>
            <p>Find the best suitable tutor for any subject according to your requirements. Simply go to the search tutors page.</p>
        </div>
        
        
   
        
      </div>
    </div>
  );
}
