import banner from '../../../assets/images/banner.png'

const Banner = () => {
    return (
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Hello there
            </h1>
            <p className="mb-5 text-justify">
              Our program for students is a structured educational support system designed to help students
               achieve their academic and personal goals. This program typically involves a coach or mentor
                who works closely with students to provide guidance, motivation, and resources to enhance
                 their learning experience.
            </p>
            <button className="btn btn-primary">See All Classes</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;