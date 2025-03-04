import { FaqsHelpsQues } from "../../Components/faqs/FaqsHelpsQues";
import { FaqsTutorsQuesTions } from "../subject/data";

export const FaqsMain = () => {
  return (
    <div className="w-full h-fit px-4 sm:px-6 md:px-12 lg:px-24 py-4 flex flex-col gap-16 md:gap-20 font-display">
      
      {/* Header Section */}
      <div className="w-full h-auto flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-12 bg-[#F6F6F6] p-6 md:p-12 lg:p-16 rounded-xl">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 gap-4 md:gap-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1F1D0D] leading-tight">
            Popular Questions to Ask Before Choosing a Course
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#29281E] max-w-xl">
            Egestas sed tempus urna et pharetra. Leo integer malesuada nunc vel.
            Libero id faucibus nisl tincidunt eget nullam non nisi. Faucibus
            turpis in eu mi bibendum neque egestas.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] h-auto object-contain"
            src="/images/Faqs_images/img1.svg"
            alt="Tutor illustration"
          />
        </div>
      </div>

      {/* FAQ Sections */}
      {["TUTOR", "STUDENT"].map((category, idx) => (
        <div key={idx} className="w-full h-fit flex flex-col gap-y-6">
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#1F1D0D] text-center">
            {category}
          </h1>
          <div className="w-full h-fit border-2 border-[#e3e3e3] px-4 sm:px-6 md:px-12 lg:px-24 rounded-xl">
            {FaqsTutorsQuesTions.map((item, index) => (
              <FaqsHelpsQues key={index} {...item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
