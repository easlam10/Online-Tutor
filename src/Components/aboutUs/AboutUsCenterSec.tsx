interface AboutUsCenterSecTypes {
    src: string;
    label: string;
    heading: string;
    Para1: string;
    Para2: string;
    rowrevese: string;
  }
  
  export const AboutUsCenterSec = ({
    src,
    label,
    heading,
    Para1,
    Para2,
    rowrevese,
  }: AboutUsCenterSecTypes) => {
    return (
      <div className={`w-full flex flex-col items-center gap-8 lg:gap-14 ${rowrevese}`}>
        {/* Image Section */}
        <div className="w-full lg:w-[45%] flex justify-center">
          <div className="w-full max-w-[500px] relative">
            <img
              className="w-full h-[250px] sm:h-[300px] lg:h-[370px] object-contain"
              src={src}
              alt="Tutor illustration"
            />
          </div>
        </div>
  
        {/* Text Section */}
        <div className="w-full lg:w-[55%] flex flex-col gap-y-4 lg:gap-y-6 text-center lg:text-left">
          <h1 className="font-medium text-base md:text-lg text-[#A435F0]">{label}</h1>
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">{heading}</h1>
          <div className="flex flex-col gap-y-3 lg:gap-y-4">
            <p className="text-sm sm:text-base text-gray-600">{Para1}</p>
            <p className="text-sm sm:text-base text-gray-600">{Para2}</p>
          </div>
        </div>
      </div>
    );
  };