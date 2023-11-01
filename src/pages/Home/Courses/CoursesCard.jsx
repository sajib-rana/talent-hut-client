import { Link } from "react-router-dom";

const CoursesCard = ({ course }) => {
  const { price,subject_image_url,instructor_name,subject_name,available_seats,total_seats,instructor_email } = course;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={subject_image_url} alt="course" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="">Subject: {subject_name}</h2>
        <h2 className="">Instructor Name: {instructor_name}</h2>
        <p className="">Available Seat: {available_seats}</p>
        <p className="">Total Seat: {total_seats}</p>
        <p className="">Instructor Email: {instructor_email}</p>
        <p className="">Price: ${price}</p>
        <div className="card-actions">
          <Link>
            <button className="btn btn-primary">Enrolled</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
