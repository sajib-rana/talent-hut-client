import { useEffect, useState } from 'react';
// import img from '../../../assets/images/sajib.webp'
import "./Instructor.css"
import useAuth from '../../../hooks/useAuth';


const InstructorDetail = () => {
     const [instructors, setInstructors] = useState([]);
     const {user} = useAuth();
     //  const {instructors} = useInstructor();
     console.log(instructors);
     useEffect(() => {
       fetch("http://localhost:5000/instructor")
         .then((res) => res.json())
         .then((data) => setInstructors(data));
     }, []);
    
    return (
      <div>
        <div className="stage mx-auto my-5">
          <img className="ball" src={user.photoURL} alt="" />
        </div>
      </div>
    );
};

export default InstructorDetail;