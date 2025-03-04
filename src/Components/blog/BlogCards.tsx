import { BlogCardItems } from "./BlogCardItems";
import { LuPin } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

interface BlogCardsTypes {
  label: string;
  src: string;
}

export const BlogCards = ({ label, src }: BlogCardsTypes) => {
  return (
    <div className="w-full sm:w-[90%] md:w-[85%] lg:w-[96] xl:w-[320px] h-fit flex flex-col gap-y-4 mx-auto">
      <div className="w-full h-fit relative">
        <div className="py-2 px-4 bg-[#F6F6F6] rounded-lg absolute right-3 top-3 text-xs">
          PHOTOGRAPHY
        </div>
        <img src={src} className="w-full h-[230px] object-cover rounded-md" alt="" />
      </div>
      <div className="w-full h-fit flex flex-col gap-y-4 ">
        <div className="w-full flex items-center flex-wrap gap-2 sm:gap-4">
          <BlogCardItems icon={<LuPin className="text-lg" />} label="Sticky Post" />
          <BlogCardItems icon={<IoPersonOutline className="text-lg" />} label="by Durrad" />
          <BlogCardItems icon={<FaRegCalendarAlt className="text-lg" />} label="Feb 12, 2023" />
        </div>
        <h1 className="font-bold text-base sm:text-lg">{label}</h1>
        <div className="w-fit h-fit flex items-center gap-x-2 cursor-pointer">
          <h1 className="font-medium text-sm sm:text-lg">Read Articles</h1>
          <div className="w-5 h-5 bg-black rounded-full flex justify-center items-center">
            <FaArrowRightLong className="text-white text-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};
