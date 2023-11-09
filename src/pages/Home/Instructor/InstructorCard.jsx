import { Link } from "react-router-dom";


const InstructorCard = ({instructor}) => {
    const {_id, name,email,image,phone} = instructor;
    return (
      <div className="card w-96 glass">
        <figure>
          <img src={image} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Instructor Name: {name}</h2>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <div className="card-actions justify-end">
            <Link to={`/instructorDetail/${_id}`} className="btn btn-primary">
              Contact me
            </Link>
          </div>
        </div>
      </div>
    );
};

export default InstructorCard;