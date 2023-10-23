

const InstructorCard = ({instructor}) => {
    const { name,email,image,phone} = instructor;
    return (
      <div className="card w-96 glass">
        <figure>
          <img
            src={image}
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Instructor Name: {name}</h2>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Contact me</button>
          </div>
        </div>
      </div>
    );
};

export default InstructorCard;