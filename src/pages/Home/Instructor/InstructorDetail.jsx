// import { useEffect, useState } from 'react';
// import img from '../../../assets/images/sajib.webp'
import "./Instructor.css"
// import useInstructor from '../../../hooks/useInstructor';
import { useLoaderData } from 'react-router-dom';


const InstructorDetail = () => {
      const instructor = useLoaderData();
      const { name, image, about, phone, email } = instructor;
    //  const [detail, setDetail] = useState([]);
     
    //   const {data} = useInstructor();
    //  console.log(data);
    //  useEffect(() => {
    //    fetch(`http://localhost:5000/instructor/${data._id}`)
    //      .then((res) => res.json())
    //      .then((data) => setDetail(data));
    //  }, [data]);
    console.log(instructor);
    return (
      <div>
        <h1 className="text-2xl font-bold text-center pt-6">Name: {name}</h1>
        <div className="stage mx-auto my-5">
          <img className="ball" src={image} alt="" />
        </div>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <p>About: {about}</p>
      </div>
    );
};

export default InstructorDetail;