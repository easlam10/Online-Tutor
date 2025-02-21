import { FaArrowRight } from "react-icons/fa";
import { SubjectsCircle } from "./CoursesCircle";

interface SubjectCardsProps {
  price: string;
  userName: string;
  degrees: string;
  reviews: string | number;
  pera1: string;
  year: string | number;
  pera2: string;
  studys?: string[];

}

export const SubjectCards: React.FC<SubjectCardsProps> = ({
  price,
  userName,
  degrees,
  reviews,
  pera1,
  year,
  pera2,
  studys = ["Ielts", "Tofel", "PTE"],

}) => {
  return (
    <div className="w-full  md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-xl border-3 border-[#e5e5e5] flex flex-col py-5 items-center justify-center gap-y-4 md:gap-y-6 p-4 ">
      {/* Top Section */}
      <div className="w-full flex justify-between items-center px-4">
        <div className="py-1 px-3 text-xs md:text-sm font-normal rounded-xl text-white bg-[#52D78E]">
          Available
        </div>
        <h1 className="text-xs md:text-sm font-medium text-[#1F1D0D]">
          {price}
        </h1>
      </div>

      {/* Profile Image */}
      <img className="w-24 sm:w-32 md:w-36 rounded-full" src="/images/Subjects_images/img2.svg" alt="Profile" />

      {/* User Info */}
      <div className="w-full flex flex-col gap-y-1 items-center text-center">
        <h1 className="font-semibold text-lg md:text-xl">{userName}</h1>
        <h1 className="font-normal text-sm md:text-base text-[#8F8F8F]">
          {degrees}
        </h1>
        <h1 className="text-xs md:text-sm font-medium text-[#1F1D0D]">
          ( {reviews} )
        </h1>
      </div>

      {/* Subjects List */}
      <div className="w-full flex flex-wrap justify-center gap-2 px-3">
        {studys.map((subject, index) => (
          <SubjectsCircle key={index} label={subject} />
        ))}
        <div className="px-3 py-1 rounded-2xl text-sm font-medium bg-[#FFD25D]">
          +2
        </div>
      </div>

      {/* Description */}
      <h1 className="text-center text-sm md:text-base font-normal text-[#8F8F8F] px-3">
        {pera1} <span className="text-black">{year}</span> {pera2}
      </h1>

      {/* Divider */}
      <div className="w-full h-[2px] bg-[#e5e5e5] my-2"></div>

      {/* View Profile Button */}
      <div className="flex gap-x-3 items-center justify-center cursor-pointer">
        <h1 className="font-medium text-base text-[#1F1D0D]">View Profile</h1>
        <div className="w-6 h-6 bg-[#FFD25D] rounded-full flex justify-center items-center">
          <FaArrowRight className="text-sm" />
        </div>
      </div>
    </div>
  );
};
