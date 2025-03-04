import { GoPlus } from "react-icons/go";

interface FaqsHelpsQuesTypes {
  label: string;
}

export const FaqsHelpsQues = ({ label }: FaqsHelpsQuesTypes) => {
  return (
    <div className="w-full h-fit flex flex-col gap-y-8 ">
      <div className="w-full flex items-center justify-between py-6 sm:py-8 px-4 sm:px-6 border-b-1 border-[#e3e3e3]">
        <h1 className="font-bold text-base sm:text-lg md:text-xl text-[#1F1D0D]">
          {label}
        </h1>
        <div className="w-10 h-10 bg-[#1F1D0D] cursor-pointer rounded-full flex justify-center items-center hover:bg-opacity-80 transition">
          <GoPlus className="text-xl sm:text-2xl text-white" />
        </div>
      </div>
    </div>
  );
};
