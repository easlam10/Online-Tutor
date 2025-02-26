import React from "react";

export default function Footer() {
  return (
    <>
      {/* Newsletter section */}
      <div className="w-full  h-auto md:h-[721px] mt-[355px] flex flex-col items-center justify-center bg-[#1F1D0D] relative">
        <div className="w-[90%] md:w-[80%] h-auto md:h-[490px] p-6 md:p-0 flex justify-center items-center rounded-[10px] bg-[#F7FF62] shadow-[15px_15px_0_0_#FFD32B] absolute top-[-150px] md:top-[-255px]">
          <div className="flex flex-col gap-4 md:gap-8 text-center md:text-left">
            <h1 className="text-[32px] md:text-[48px] font-bold">
              Subscribe to our Newsletter
            </h1>
            <p className="text-sm md:text-base">
              Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus.
              Sed magna purus, fermentum eu
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                className="w-full md:w-[300px] py-2 px-4 bg-white border rounded"
                placeholder="Your Email"
                type="email"
              />
              <button className="bg-black text-white px-6 py-2 md:px-[40px] md:py-[16px] rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer section */}
        <div className="text-white flex flex-wrap w-full  md:justify-evenly mt-[200px] md:mt-[150px] p-6 md:p-0 gap-8">
          <div className="flex flex-col gap-6 w-full md:w-[324px]">
            <div className="flex justify-center md:justify-start">
              <img src="/Online Education.png" alt="Logo" />
              <h1 className="text-[32px] md:text-[40px] font-bold">FindTutors</h1>
            </div>
            <p className="text-xs text-center md:text-left">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <div className="flex justify-center md:justify-start gap-2">
              <img src="/Facebook.png" alt="Facebook" />
              <img src="/Instagram.png" alt="Instagram" />
              <img src="/Linkedin.png" alt="Linkedin" />
              <img src="/Youtube.png" alt="Youtube" />
              <img src="/Twitter.png" alt="Twitter" />
            </div>
          </div>

          <div className="flex flex-col gap-6 w-full md:w-auto text-center md:text-left">
            <h1 className="font-bold">Links</h1>
            <ul className="space-y-2">
              <li>Home</li>
              <li>Courses</li>
              <li>Subject</li>
              <li>Request a Tutor</li>
            </ul>
          </div>

          <div className="flex flex-col gap-6 w-full md:w-auto text-center md:text-left">
            <h1 className="font-bold">Support</h1>
            <ul className="space-y-2">
              <li>About US</li>
              <li>Blogs</li>
              <li>Contacts</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="flex flex-col gap-6 w-full md:w-auto text-center md:text-left">
            <h1 className="font-bold">Contact Us</h1>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 justify-center md:justify-start">
                <img src="/Map Point.png" alt="Map Point" />
                <p>1700 W Blancke St, kiyev port south USA, American</p>
              </div>
              <div className="flex gap-2 justify-center md:justify-start">
                <img src="/Mail.png" alt="Mail" />
                <p>Call: +(92) 336 1016020</p>
              </div>
              <div className="flex gap-2 justify-center md:justify-start">
                <img src="/Phone.png" alt="Phone" />
                <p>Email: info@findtutors.pk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}