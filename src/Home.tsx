import Footer from "./Components/footer";
import Navbar from "./Navbar";
// import { SubjectMain } from "./utils/courses/page";
import { CoursesMain } from "./utils/courses/page";
import { BecomeATutorMain } from "./utils/requesATutor/page";

export default function () {
  return (
    <>
      <Navbar />
      {/* <SubjectMain /> */}
      <Footer />
    {/* <SubjectMain/> */}
    {/* <CoursesMain/> */}
    <BecomeATutorMain/>
      {/* <Navbar /> */}
      {/* <Footer /> */}
    </>
  );
}
