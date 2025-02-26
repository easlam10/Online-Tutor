import React from "react";
import Hero from "./Hero";
import Working from "./Working";
import { SubjectCards } from "./courses/CoursesCards";
import { cardData } from "../utils/subject/data";
import { useState } from "react";

export default function () {
  const cardsPerPage = 9;
  const totalPages = Math.ceil(cardData.length / cardsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = cardData.slice(startIndex, endIndex);
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="px-[100px]">
          <Hero />
          <Working />
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {currentCards.map((card, index) => (
              <SubjectCards key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
