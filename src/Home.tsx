import { CoursesMain } from "./utils/courses/page";
import { SubjectMain } from "./utils/subject/page";
import { RequestATutor } from "./utils/requestAtutor/page";
import { ContactUs } from "./utils/contactus/page";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";

export default function () {
  return (
    <>
      <Navbar />
      {/* <SubjectMain /> */}
      <Footer />
    {/* <SubjectMain/> */}
    <SubjectMain/>
    {/* <CoursesMain/> */}
    {/* <ContactUs/> */}
    {/* <BecomeATutorMain/> */}
    {/* <RequestATutor/> */}
      {/* <Navbar /> */}
      {/* <Footer /> */}
    </>
  );
}
