import { HiLocationMarker } from "react-icons/hi";
import { AboutUsCenterSec } from "../../Components/aboutUs/AboutUsCenterSec";
import { ContactUsBoxes } from "../../Components/Contactus/ContactUsBoxes";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const AboutUs = () => {
  const callBoxData = [
    {
      icon: <FaPhoneAlt className="text-xl" />, 
      label: "Call Us", 
      Number1: "(101) 222 123 456", 
      Number2: "(102) 333 234 674"
    },
    {
      icon: <MdEmail className="text-xl" />, 
      label: "Email Address", 
      Number1: "info-findtutors@example.com", 
      Number2: "findtutors-support@example.com"
    },
    {
      icon: <HiLocationMarker className="text-xl" />, 
      label: "Reach Us", 
      Number1: "31 Sunset Road, Gales Ferry,", 
      Number2: "6335 United States"
    }
  ];

  return (
    <div className="w-full px-4 sm:px-6 md:px-12 lg:px-24 py-8 md:py-12 flex flex-col gap-16 md:gap-24 font-display">
      <div className="w-full flex flex-col lg:flex-row items-center gap-8 md:gap-12 bg-[#F6F6F6] p-6 md:p-12 lg:p-16 rounded-xl">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 gap-4 md:gap-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F1D0D] leading-tight max-w-lg">
            About FindTutors
          </h1>
          <p className="text-sm sm:text-base text-[#29281E] max-w-xl">
            Egestas sed tempus urna et pharetra. Leo integer malesuada nunc vel.
            Libero id faucibus nisl tincidunt eget nullam non nisi.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img className="w-full max-w-[500px] h-auto object-contain" src="/images/About_images/img1.svg" alt="Tutor illustration" />
        </div>
      </div>

      <div className="w-full flex flex-col gap-y-24 sm:gap-y-36 px-4 sm:px-8 md:px-16">
        <AboutUsCenterSec
          src="/images/About_images/img2.svg"
          label="FindTutors"
          heading="About Us"
          Para1="TutorBees.net is all about a culture of learning, experience-sharing, teaching, and evolving."
          Para2="We value the efforts of learners, teachers, and professionals aspiring for excellence."
          rowrevese="flex-col lg:flex-row"
        />

        <AboutUsCenterSec
          src="/images/About_images/img3.svg"
          label="ABOUT US"
          heading="Findtutors.pk"
          Para1="Pakistan is the fifth most populous country in the world, with more than half under 25 years of age."
          Para2="FindTutors is an online tutoring platform where experienced teachers and professionals mentor students."
          rowrevese="flex-col lg:flex-row-reverse"
        />

        <AboutUsCenterSec
          src="/images/About_images/img4.svg"
          label="VISION"
          heading="Our Vision"
          Para1="Pakistan has a young population eager to learn and grow."
          Para2="FindTutors.pk provides a flexible platform to enhance skills anytime, anywhere."
          rowrevese="flex-col lg:flex-row"
        />
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-10 px-4 sm:px-8 md:px-16">
        <div className="lg:w-[45%] flex flex-col gap-y-6 text-center lg:text-left">
          <h1 className="font-extrabold text-3xl md:text-5xl">Contact Us</h1>
          <p className="font-normal text-sm md:text-base max-w-lg mx-auto lg:mx-0">
            Viverra maecenas accumsan lacus vel facilisis volutpat.
          </p>
          <div className="flex flex-col gap-y-6">
            {callBoxData.map((item, index) => (
              <ContactUsBoxes
                key={index}
                icon={item.icon}
                label={item.label}
                Number1={item.Number1}
                Number2={item.Number2}
                backGround="bg-[#8607DD]"
              />
            ))}
          </div>
        </div>
        
        <div className="flex-1">
          <iframe
            className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.0247882449885!2d-73.96802178908014!3d40.80544907126031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f63c75af2d65%3A0xf45542f6cb090cc9!2s2880%20Broadway%2C%20New%20York%2C%20NY%2010025%2C%20USA!5e0!3m2!1sen!2s!4v1740385586324!5m2!1sen!2s"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
