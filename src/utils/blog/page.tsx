import { Pagination } from "flowbite-react";
import { BlogCards } from "../../Components/blog/BlogCards";
import { BlogcardData } from "../subject/data";
import { useState } from "react";

export const BlogMain = () => {
  const cardsPerPage = 9;
  const totalPages = Math.ceil(BlogcardData.length / cardsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = BlogcardData.slice(startIndex, endIndex);

  return (
    <div className="w-full h-fit px-4 sm:px-6 md:px-12 lg:px-24 py-8 md:py-12 lg:py-4 flex flex-col gap-16 md:gap-20 font-display">
      {/* Hero Section */}
      <div className="w-full h-auto flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-12 bg-[#F6F6F6] p-6 md:p-12 lg:p-16 rounded-xl">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 gap-4 md:gap-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1F1D0D] leading-tight">
            Articles
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#29281E] max-w-xl">
            Egestas sed tempus urna et pharetra. Leo integer malesuada nunc vel.
            Libero id faucibus nisl tincidunt eget nullam non nisi. Faucibus
            turpis in eu mi bibendum neque egestas.
          </p>
          <div className="w-full flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <input
              type="text"
              className="border-2 border-[#ababa7] rounded-md py-2 px-3 text-sm sm:text-base w-full sm:w-auto"
              placeholder="What do you want to learn?"
            />
            <button className="w-full sm:w-auto px-6 sm:px-10 py-2 sm:py-3 bg-black text-white font-semibold text-base rounded-md hover:bg-[#363421] transition-colors">
              Search
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] h-auto object-contain"
            src="/images/Subjects_images/img1.svg"
            alt="Tutor illustration"
          />
        </div>
      </div>

      {/* Blog Cards Section with Grid Layout */}
      <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCards.map((item, index) => (
          <BlogCards key={index} src={item.src} label={item.label} />
        ))}
      </div>

      {/* Pagination Section */}
      <div className="flex mt-6 ml-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          className="MainPagination"
        />
      </div>
    </div>
  );
};
