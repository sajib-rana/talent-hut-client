import { useEffect, useState } from "react";
import CoursesCard from "./CoursesCard";
import SectionTittle from "../../../components/SectionTittle";


const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="mt-4">
      <SectionTittle subHeading='Courses' heading1='Our running' heading2='Courses'></SectionTittle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CoursesCard key={course._id} course={course}></CoursesCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
