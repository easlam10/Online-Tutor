import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { ContactUsBoxes } from "../../Components/Contactus/ContactUsBoxes";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { ContactUsLogos } from "../../Components/Contactus/ContactUsLogos";

interface IFormInput {
  firstName: string;
  email: string;
  gender: string;
  number: string;
  bio: string;
  queryType: string;
}

interface OptionType {
  value: string;
  label: string;
}
export const ContactUs = () => {
  const { register, handleSubmit, reset, setValue, control } =
    useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log("Form Data:", data);
        toast.success("✅ Form submitted successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
    
        reset({
          firstName: "",
          email: "",
          gender: "",
          number: "",
          bio: "",
          queryType: "",
        });
    
        setValue("queryType", "");
      };

  const QueryTypeOptions: OptionType[] = [
    { value: "PLATFORM", label: "Platform" },
    { value: "TUTOR", label: "Tutor" },
    { value: "STUDENT", label: "Student" },
    { value: "PAYMENT", label: "Payment" },
  ];

  const callBoxData = [
    {
      icon: <FaPhoneAlt className="text-xl" />,
      label: "Call Us",
      Number1: "(101) 222 123 456",
      Number2: "(102) 333 234 674",
    },
    {
      icon: <MdEmail className="text-xl" />,
      label: "Email Address",
      Number1: "info-findtutors@example.com",
      Number2: "findtutors-support@example.com",
    },
    {
      icon: <HiLocationMarker className="text-xl" />,
      label: "Reach Us",
      Number1: "31 Sunset Road, Gales Ferry,",
      Number2: "6335 United States",
    },
  ];

  const imgSrces = [
    "/images/ContactUS_images/img5.svg",
    "/images/ContactUS_images/img6.svg",
    "/images/ContactUS_images/img10.svg",
    "/images/ContactUS_images/img7.svg",
    "/images/ContactUS_images/img8.svg",
    "/images/ContactUS_images/img9.svg",
  ];
  return (
    <div className="w-full h-fit  py-20 flex flex-col gap-y-16">
      {/* Contact Info Section */}
      <div className="w-full flex flex-col lg:flex-row gap-10 px-6 md:px-16 lg:px-36">
        {/* Left Side - Contact Info */}
        <div className="lg:w-[45%] flex flex-col gap-y-6">
          <h1 className="font-extrabold text-3xl md:text-5xl">Contact Us</h1>
          <p className="font-normal text-sm md:text-base max-w-[396px]">
            Viverra maecenas accumsan lacus vel facilisis volutpat. Faucibus
            purus in massa tempor nec feugiat nisl
          </p>
          <div className="flex flex-col gap-y-6">
            {callBoxData.map((item, index) => (
              <ContactUsBoxes
                key={index}
                icon={item.icon}
                label={item.label}
                Number1={item.Number1}
                Number2={item.Number2}
              />
            ))}
          </div>
        </div>
        {/* Right Side - Google Map */}
        <div className="flex-1">
          <iframe
        className="w-full h-[300px] md:h-[400px] lg:h-[500px]"

            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.0247882449885!2d-73.96802178908014!3d40.80544907126031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f63c75af2d65%3A0xf45542f6cb090cc9!2s2880%20Broadway%2C%20New%20York%2C%20NY%2010025%2C%20USA!5e0!3m2!1sen!2s!4v1740385586324!5m2!1sen!2s"
          ></iframe>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full flex justify-center items-center bg-[#F6F6F6] relative px-4 md:px-16 py-16">
        {/* Floating Images */}
        <img
          src="/images/ContactUS_images/img2.svg"
          className="hidden lg:block absolute top-0 left-0 w-[15%]"
          alt=""
        />
        <img
          src="/images/ContactUS_images/img3.svg"
          className="hidden lg:block absolute bottom-32 left-12 w-[6%]"
          alt=""
        />
        <img
          src="/images/ContactUS_images/img3.svg"
          className="hidden lg:block absolute top-[215px] right-16 w-[6%]"
          alt=""
        />
        <img
          src="/images/ContactUS_images/img4.svg"
          className="hidden lg:block absolute bottom-0 right-0 w-[15%]"
          alt=""
        />

        {/* Form Content */}
        <div className="w-full max-w-2xl flex flex-col gap-y-8">
          <h1 className="font-extrabold text-2xl md:text-4xl text-center">
            Contact Our Support Team to Know What You Want
          </h1>
          <ToastContainer />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-6"
          >
            {/* Grid Layout for Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div className="flex flex-col gap-y-2">
                <label className="font-semibold text-sm">Name</label>
                <input
                  placeholder="Your Name"
                  className="border-2 border-gray-400 bg-white outline-none rounded-sm p-2 placeholder:text-sm"
                  {...register("firstName")}
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-y-2">
                <label className="font-semibold text-sm">Email</label>
                <input
                  placeholder="Email Address"
                  className="border-2 border-gray-400 bg-white outline-none rounded-sm p-2 placeholder:text-sm"
                  {...register("email")}
                  required
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-y-2">
                <label className="font-semibold text-sm">Phone Number</label>
                <input
                  placeholder="Phone Number"
                  type="number"
                  className="border-2 border-gray-400 bg-white outline-none rounded-sm p-2 placeholder:text-sm"
                  {...register("number")}
                  required
                />
              </div>

              {/* Query Type Dropdown */}
              <div className="flex flex-col gap-y-2">
                <label className="font-semibold text-sm">Query Type</label>
                <Controller
                  name="queryType"
                  control={control}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="border-2 h-[45px] border-gray-400 bg-white outline-none rounded-sm p-2 text-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 cursor-pointer"
                      value={field.value || ""}
                      onChange={(event) => field.onChange(event.target.value)}
                      required
                    >
                      <option
                        value=""
                        disabled
                        className="text-gray-500 bg-white"
                      >
                        Choose
                      </option>
                      {QueryTypeOptions.map((option) => (
                        <option
                          key={option.value}
                          value={option.value}
                          className="text-black bg-white"
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>
                  )}
                />
              </div>
            </div>

            {/* Message Box */}
            <div className="flex flex-col gap-y-2">
              <label className="font-semibold text-sm">Your Message</label>
              <textarea
                placeholder="Details of your requirements"
                className="border-2 outline-none border-gray-400 bg-white rounded-sm py-4 px-6 h-[200px] md:h-[300px] resize-none placeholder:text-sm"
                {...register("bio")}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-start">
              <input
                className="bg-[#1F1D0D] w-full  font-semibold text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-[#29281E] transition"
                type="submit"
                value="Send Your Message"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Logos Section */}
      <div className="w-full flex flex-col items-center gap-y-8 px-4 md:px-36">
        <h1 className="font-extrabold text-2xl md:text-4xl text-center max-w-lg">
          Employees of These Companies Study With Us
        </h1>

        <div className="w-full overflow-x-auto whitespace-nowrap flex  gap-6  md:gap-10 justify-between px-4">
          {imgSrces.map((src, index) => (
            <ContactUsLogos key={index} src={src} />
          ))}
        </div>
      </div>
    </div>
  );
};
