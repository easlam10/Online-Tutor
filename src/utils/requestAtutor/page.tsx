import { SubmitHandler, useForm, Controller } from "react-hook-form";
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
  email: string;
  gender: string;
  number: string;
  age: string;
  subjects: string;
  courses: string;
  fee: string;
  bio: string;
  profileImage: File | null;
  introductionVideo: File | null;
  tuition:string
}

export const RequestATutor = () => {
  const { register, handleSubmit, control, reset, setValue } =
    useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log("Form Data:", data);
        toast.success("Form submitted successfully!");
      
        reset({
          firstName: "",
          email: "",
          gender: "",
          number: "",
          age: "",
          subjects: "",
          courses: "",
          fee: "",
          bio: "",
          profileImage: null,
          introductionVideo: null,
          tuition: "",
        });
      
        setValue("gender", "");
        setValue("age", "");
        setValue("subjects", "");
        setValue("courses", "");
        setValue("tuition", "");
        setValue("fee", "");
      };
      

  const classOptions: OptionType[] = [
    { value: "PG", label: "PG" },
    { value: "NURSERY", label: "NURSERY" },
    { value: "PREP", label: "PREP" },
    { value: "ONE", label: "ONE" },
    { value: "ONE", label: "ONE" },
    { value: "TWO", label: "TWO" },
    { value: "THREE", label: "THREE" },
    { value: "FOUR", label: "FOUR" },
  ];

  const coursesOptions: OptionType[] = [
    { value: "ENGLISH", label: "ENGLISH" },
    { value: "URDU", label: "URDU" },
    { value: "MATHEMATICS", label: "MATHEMATICS" },
    { value: "SCIENCE", label: "SCIENCE" },
    { value: "ISLAMIYAT", label: "ISLAMIYAT" },
    { value: "PAK STUDY", label: "PAK STUDY" },
    { value: "THREE", label: "THREE" },
    { value: "HISTORY", label: "HISTORY" },
  ];
  const subjectOptions: OptionType[] = [
    { value: "Morning", label: "Morning" },
    { value: "Evening", label: "Evening" },

  ];
  const genderOptions: OptionType[] = [
    { value: GenderEnum.male, label: "Male" },
    { value: GenderEnum.female, label: "Female" },
    { value: GenderEnum.other, label: "Other" },
  ];

  const tutionModeOptions: OptionType[] = [
    { value: "1 Hour", label: "1 Hour" },
    { value: "2 Hour", label: "2 Hour" },
    { value: "3 Hour", label: "3 Hour" },
    { value: "4 Hour", label: "4 Hour" },
    { value: "5 Hour", label: "5 Hour" },
    { value: "6 Hour", label: "6 Hour" },
  ]
    const feeOptions: OptionType[] = [
        { value: "1000 Rs", label: "1000 Rs " },
        { value: "1500 Rs", label: "1500 Rs " },
        { value: "2000 Rs", label: "2000 Rs " },
        { value: "2500 Rs", label: "2500 Rs " },
        { value: "3000 Rs", label: "3000 Rs " },

        
  ];


 
  return (
    <div className="w-full h-fit px-4 sm:px-6 md:px-12 lg:px-24 py-8 md:py-12 lg:py-4 flex flex-col gap-16 md:gap-24 font-display">
      {/* Header Section */}
      <div className="w-full flex flex-col lg:flex-row items-center gap-8 md:gap-12 bg-[#F6F6F6] p-6 md:p-12 lg:p-16 rounded-xl">
      <ToastContainer />
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 gap-4 md:gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1F1D0D] leading-tight">
            Request A Tutor
          </h1>
          <p className="text-sm md:text-sm text-[#29281E] max-w-[550px]">
            Please complete the form below to request a tutor. We will pair the
            most suitable tutor with you according to your requirements for
            Home/Online tuition lessons. Fields marked as * are mandatory.
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
          className="w-full flex flex-col gap-6 border-2 border-dotted border-[#94938e] px-10 py-7"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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

            {/* Email */}
            <div className="flex flex-col gap-y-3">
              <label className="font-medium text-xl text-[#1F1D0D]">
              Email *
              </label>
              <input
                placeholder="Email Address"
                className="border-2 border-[#94938e] outline-none rounded-lg p-2 px-3"
                {...register("email")}
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


            <div className="flex flex-col gap-y-3">
              <label className="font-medium text-xl text-[#1F1D0D]">
              Tutor Gender Preference *
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



            {/* Age (Select Dropdown) */}
            <div className="flex flex-col gap-y-3">
              <label className="font-medium text-xl text-[#1F1D0D]">
              Class *
              </label>
              <Controller
                name="age"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={classOptions}
                    placeholder="Select Class"
                    className="w-full"
                    value={
                        classOptions.find(
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

            {/* Subjects */}
            <div className="flex flex-col gap-y-3">
              <label className="font-medium text-xl text-[#1F1D0D]">
              Subjects *
              </label>
              <Controller
                name="subjects"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={subjectOptions}
                    placeholder="Select Subjects"
                    className="w-full"
                    value={
                        subjectOptions.find(
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

            {/* Select Course  */}
            <div className="flex flex-col gap-y-3">
              <label className="font-medium text-xl text-[#1F1D0D]">
              Select Course  <span className="text-base text-[#333333] font-medium">( Optional )</span> *
              </label>
              <Controller
                name="courses"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={coursesOptions}
                    placeholder="Select Course"
                    className="w-full"
                    isMulti
                    value={coursesOptions.filter(option => field.value?.includes(option.value))}
                    onChange={(selectedOptions) =>
                      field.onChange(selectedOptions.map((option) => option.value))
                    }
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

            {/* Tuition Mode (Select Dropdown) */}
            <div className="flex flex-col gap-y-3">
              <label className="font-medium text-xl text-[#1F1D0D]">
              Tuition Mode *
              </label>
              <Controller
                name="tuition"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={tutionModeOptions}
                    placeholder="Select"
                    className="w-full"
                    value={
                        tutionModeOptions.find(
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

            {/* Fee Range (per hour) */}
            <div className="flex flex-col gap-y-3">
              <label className="font-medium text-xl text-[#1F1D0D]">
              Fee Range (per hour) *
              </label>
              <Controller
                name="fee"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={feeOptions}
                    placeholder="Select"
                    className="w-full"
                    value={
                        feeOptions.find(
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



            <div className="flex flex-col gap-y-3">
              <label className="font-medium text-xl text-[#1F1D0D]">
              Daily Required Time <span className="text-red-500"> (hr)</span> *
              </label>
              <Controller
                name="tuition"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={tutionModeOptions}
                    placeholder="Select"
                    className="w-full"
                    value={
                        tutionModeOptions.find(
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
          </div>
          <div className="flex flex-col gap-y-3 h-96">
            <label className="font-medium text-xl text-[#1F1D0D]">Other Details *</label>
            <textarea
              placeholder="Details of your requirements"
              className="border-2 border-[#94938e] rounded-lg p-2 px-3 h-full resize-none"
              {...register("bio")}
              required
            />
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
