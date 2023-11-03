import { useEffect, useState } from "react";
import SectionTittle from "../../../components/SectionTittle";
import InstructorCard from "./InstructorCard";
// import useInstructor from "../../../hooks/useInstructor";


const Instructor = () => {
 const [instructors, setInstructors] = useState([]);
//  const {instructors} = useInstructor();
  console.log(instructors)
  useEffect(() => {
    fetch("http://localhost:5000/instructor")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
    return (
        <div className="mt-4">
      <SectionTittle subHeading='Instructor' heading1='Here Our' heading2='Instructor'></SectionTittle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {instructors.map(instructor => (
          <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>
        ))}
      </div>
    </div>
    );
};

export default Instructor;