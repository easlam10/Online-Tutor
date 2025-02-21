import { useState } from "react";
import { ImEqualizer } from "react-icons/im";
import Select, { SingleValue } from "react-select";
import { SubjectCards } from "../../Components/subject/SubjectCards";
import { Pagination } from "flowbite-react";
import { cardData } from "./data";

interface OptionType {
  value: string;
  label: string;
}

export const SubjectMain = () => {
  const [selectedSubject, setSelectedSubject] =
    useState<SingleValue<OptionType>>(null);
  const [selectedClass, setSelectedClass] =
    useState<SingleValue<OptionType>>(null);
  const [selectedSorting, setSelectedSorting] =
    useState<SingleValue<OptionType>>(null);

  // Pagination Logic
  const cardsPerPage = 9;
  const totalPages = Math.ceil(cardData.length / cardsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  // Get the cards for the current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = cardData.slice(startIndex, endIndex);

  const options: OptionType[] = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const option2: OptionType[] = [
    { value: "Red", label: "Red" },
    { value: "Blue", label: "Blue" },
    { value: "Green", label: "Green" },
  ];

  const option3: OptionType[] = [
    { value: "A To Z", label: "A To Z" },
    { value: "Z To A", label: "Z To A" },
  ];

  return (
    <div className="w-full h-fit px-4 sm:px-6 md:px-12 lg:px-24 py-8 md:py-12 lg:py-20 flex flex-col gap-16 md:gap-24 font-display">
      {/* Hero Section */}
      <div className="w-full h-auto flex flex-col lg:flex-row items-center gap-8 md:gap-12 bg-[#F6F6F6] p-6 md:p-12 lg:p-16 rounded-xl">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 gap-4 md:gap-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1F1D0D] leading-tight">
            Find the best tutor for your subjects
          </h1>
          <p className="text-sm md:text-base text-[#29281E] max-w-xl">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="w-full flex flex-col sm:flex-row gap-4">
            <Select
              value={selectedSubject}
              onChange={setSelectedSubject}
              options={options}
              className="w-full text-sm"
              placeholder="Select Subjects"
              styles={{
                control: (base) => ({
                  ...base,
                  backgroundColor: "#F6F6F6",
                  height: "45px",
                  cursor: "pointer",
                  border: "1px solid black",
                }),
              }}
            />
            <Select
              value={selectedClass}
              onChange={setSelectedClass}
              options={option2}
              className="w-full text-sm"
              placeholder="Your Class"
              styles={{
                control: (base) => ({
                  ...base,
                  backgroundColor: "#F6F6F6",
                  height: "45px",
                  cursor: "pointer",
                  border: "1px solid black",
                }),
              }}
            />
          </div>
          <button className="w-full cursor-pointer sm:w-auto px-6 py-3 bg-[#1F1D0D] text-white font-bold text-base rounded-md hover:bg-[#363421] transition-colors">
            FIND TUTORS
          </button>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="w-full max-w-[500px] lg:max-w-none h-auto object-contain"
            src="/images/Subjects_images/img1.svg"
            alt="Tutor illustration"
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full flex flex-col gap-8 md:gap-12">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="font-bold text-lg text-center sm:text-left">
            Showing {currentCards.length} of {cardData.length} results
          </h1>
          <div className="w-full sm:w-fit flex flex-col xs:flex-row gap-3">
            <button className="w-full xs:w-fit flex items-center justify-center gap-2 bg-[#F6F6F6] px-4 py-2.5 rounded-md border-2 border-[#e5e5e5] text-sm text-[#8F8F8F] hover:bg-[#eaeaea] transition-colors">
              <ImEqualizer className="text-sm" /> FILTER
            </button>
            <Select
              value={selectedSorting}
              onChange={setSelectedSorting}
              options={option3}
              className="w-full xs:w-36 text-sm"
              placeholder="SORTING"
              styles={{
                control: (base) => ({
                  ...base,
                  backgroundColor: "#F6F6F6",
                  height: "40px",
                  cursor: "pointer",
                  border: "2px solid #e5e5e5",
                }),
                placeholder: (base) => ({
                  ...base,
                  color: "#8F8F8F",
                  fontWeight: "400",
                }),
              }}
            />
          </div>
        </div>

        {/* Display only 9 Cards Per Page */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {currentCards.map((card, index) => (
            <SubjectCards key={index} {...card} />
          ))}
        </div>

        {/* Pagination Section */}
        <div className="flex overflow-x-auto justify-center sm:justify-start">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
            className="MainPagination"
          />
        </div>
      </div>
    </div>
  );
};
