import React from "react";

interface ContactUsBoxesProps {
  icon: React.ReactNode;
  label: string;
  Number1: string;
  Number2: string;
  backGround:string
}

export const ContactUsBoxes: React.FC<ContactUsBoxesProps> = ({
  icon,
  label,
  Number1,
  Number2,
  backGround,
}) => {
  return (
    <div className="w-fit h-fit flex items-center gap-x-3">
      <div className={`w-[65px] h-[66px] ${backGround} rounded-md relative`}>
        <div className="w-[61px] h-[65px] flex justify-center items-center absolute bottom-[5px] rounded-lg text-white bg-[#A435F0]">
          {icon}
        </div>
      </div>
      <div className="w-fit h-fit flex flex-col gap-y-1">
        <h1 className="font-semibold text-base">{label}</h1>
        <h1 className="text-sm font-normal">{Number1}</h1>
        <h1 className="text-sm font-normal">{Number2}</h1>
      </div>
    </div>
  );
};
