import { useState } from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FiUpload } from "react-icons/fi";
import Select from "react-select";
import { toast, ToastContainer } from "react-toastify";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface OptionType {
  value: string;
  label: string;
}

interface IFormInput {
  firstName: string;
  lastName: string;
  gender: string;
  number: string;
  age: string;
  password: string;
  confirmpassword: string;
  address: string;
  bio: string;
  profileImage: File | null; 
    introductionVideo: File | null;
}

export const BecomeATutorMain = () => {
    const { register, handleSubmit, control, reset, setValue } =
    useForm<IFormInput>();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("Form Data:", data);
    toast.success("Form submitted successfully!");
    reset();
    setVideoUrl(null);
    setVideoFile(null);
    setImagePreview(null);
  };

  const ageOptions: OptionType[] = [
    { value: "18-25", label: "18-25" },
    { value: "26-35", label: "26-35" },
    { value: "36-45", label: "36-45" },
    { value: "45-60", label: "45-60" },
  ];

  const genderOptions: OptionType[] = [
    { value: GenderEnum.male, label: "Male" },
    { value: GenderEnum.female, label: "Female" },
    { value: GenderEnum.other, label: "Other" },
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setValue("profileImage", file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("video/")) {
      setValue("introductionVideo", file);
      setVideoFile(file);
      setVideoUrl(URL.createObjectURL(file));
    } else {
      toast.error("Please upload a valid video file.");
    }
  };
  return (
    <div className="w-full h-fit px-4 sm:px-6 md:px-12 lg:px-24 py-8 md:py-12 lg:py-4 flex flex-col gap-16 md:gap-24 font-display">
            <ToastContainer />
      {/* Header Section */}
      <div className="w-full flex flex-col lg:flex-row items-center gap-8 md:gap-12 bg-[#F6F6F6] p-6 md:p-12 lg:p-16 rounded-xl">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 gap-4 md:gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1F1D0D] leading-tight">
            Become an Online Tutor
          </h1>
          <p className="text-sm md:text-sm text-[#29281E] max-w-[550px]">
            Please complete the below form for registration. With registration,
            it is easier for Students to reach You and you can earn extra income
            from home and online tuition.Fields marked as * are mandatory.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="w-full max-w-[500px] lg:max-w-none h-auto object-contain"
            src="/images/RequestATutor_images/img1.svg"
            alt="Tutor illustration"
          />
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full h-fit bg-white p-8 px-0 md:p-12 lg:p-16 shadow-md rounded-xl">
        <h1 className="font-extrabold text-4xl mb-6 text-[#1F1D0D]">
          General Information
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-6  border-2 border-dotted border-[#94938e] px-10 py-7"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            {/* First Name */}
            <div className="flex flex-col gap-y-3">
              <label className="font-medium text-xl text-[#1F1D0D]">
                First Name *
              </label>
              <input
                placeholder="First Name"
                className="border-2 border-[#94938e] outline-none rounded-lg p-2 px-3"
                {...register("firstName")}
                required
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-y-3">
              <label className="font-medium text-xl text-[#1F1D0D]">
                Last Name *
              </label>
              <input
                placeholder="Last Name"
                className="border-2 border-[#94938e] outline-none rounded-lg p-2 px-3"
                {...register("lastName")}
                required
              />
            </div>

            {/* Number */}
            <div className="flex flex-col gap-y-3">
              <label className="font-medium text-xl text-[#1F1D0D]">
                Phone Number *
              </label>
              <input
                placeholder="Phone Number"
                type="number"
                className="border-2 border-[#94938e] outline-none rounded-lg p-2 px-3"
                {...register("number")}
                required
              />
            </div>

            {/* Age (Select Dropdown) */}
            <div className="flex flex-col gap-y-3">
              <label className="font-medium text-xl text-[#1F1D0D]">
                Age *
              </label>
              <Controller
                name="age"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={ageOptions}
                    placeholder="Select Age"
                    className="w-full"
                    value={
                      ageOptions.find(
                        (option) => option.value === field.value
                      ) || null
                    }
                    onChange={(option) => field.onChange(option?.value)}
                    styles={{
                      control: (base) => ({
                        ...base,
                        backgroundColor: "transparent",
                        height: "45px",
                        cursor: "pointer",
                        border: "2px solid #94938e",
                      }),
                    }}
                  />
                )}
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-y-3">
              <label className="font-medium text-xl text-[#1F1D0D]">
                Password *
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="border-2 border-[#94938e] outline-none rounded-lg p-2 px-3"
                {...register("password")}
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-y-3">
              <label className="font-medium text-xl text-[#1F1D0D]">
                Confirm Password *
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="border-2 border-[#94938e] outline-none rounded-lg p-2 px-3"
                {...register("confirmpassword")}
                required
              />
            </div>

            {/* Gender (Select Dropdown) */}
            <div className="flex flex-col gap-y-3">
              <label className="font-medium text-xl text-[#1F1D0D]">
                Gender *
              </label>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={genderOptions}
                    placeholder="Select Gender"
                    className="w-full"
                    value={
                      genderOptions.find(
                        (option) => option.value === field.value
                      ) || null
                    }
                    onChange={(option) => field.onChange(option?.value)}
                    styles={{
                      control: (base) => ({
                        ...base,
                        backgroundColor: "transparent",
                        height: "45px",
                        cursor: "pointer",
                        border: "2px solid #94938e",
                      }),
                    }}
                  />
                )}
              />
            </div>

            {/* Address */}
            <div className="flex flex-col gap-y-3">
              <label className="font-medium text-xl text-[#1F1D0D]">
                Address *
              </label>
              <input
                type="text"
                placeholder="Your Address"
                className="border-2 border-[#94938e] outline-none rounded-lg p-2 px-3"
                {...register("address")}
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-3 h-96">
            <label className="font-medium text-xl text-[#1F1D0D]">Bio *</label>
            <textarea
              placeholder="Write Message"
              className="border-2 border-[#94938e] rounded-lg p-2 px-3 h-full resize-none"
              {...register("bio")}
              required
            />
          </div>
      <div className="w-full h-fit border-2 border-dotted py-8 bg-[#fffff0] flex flex-col items-center gap-y-4 border-[#94938e]">
          {imagePreview && <img src={imagePreview} alt="Profile Preview" className="w-32 h-32 object-cover rounded-full" />}
          <h1 className="font-semibold text-base text-[#1F1D0D]">Allowed File Types: png, jpg, jpeg</h1>
          <h1 className="font-semibold text-base text-[#1F1D0D]">Maximum Image Size: 10MB</h1>
          <input type="file" accept="image/png, image/jpeg" onChange={handleImageUpload} className="hidden" id="file-upload" />
          <label htmlFor="file-upload" className="w-28 py-3 text-white cursor-pointer font-semibold bg-[#1F1D0D] rounded-md text-center">
            Upload
          </label>
        </div>

         {/* Video Upload Section */}
          <div className="w-full h-fit border-2 border-dotted py-8 bg-[#fffff0] flex flex-col items-center gap-y-4 border-[#94938e]">
            <BiSolidMoviePlay className="text-5xl" />
            <h1 className="font-semibold text-base text-[#1F1D0D]">
              Upload Your Introduction Video
            </h1>
            <h1 className="font-normal text-base text-[#1F1D0D] text-center px-4">
              Please describe your teaching experience and style in a brief
              introduction video for students' reference.
            </h1>

            <label className="w-fit py-3 px-4 flex gap-x-2 text-white cursor-pointer font-semibold bg-[#1F1D0D] rounded-md">
              <FiUpload className="text-xl" />
              Upload Video
              <input
                type="file"
                accept="video/*"
                className="hidden"
                onChange={handleVideoUpload}
              />
            </label>

            {videoUrl && (
              <video className="mt-4 rounded-lg" width="320" controls>
                <source src={videoUrl} type={videoFile?.type} />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          {/* Submit Button */}
          <div className="flex justify-start mt-4">
            <input
              className="bg-[#1F1D0D] text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-[#29281E] transition"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
