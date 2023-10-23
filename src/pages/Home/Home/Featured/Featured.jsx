import SectionTittle from "../../../../components/SectionTittle";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTittle
        subHeading="Question"
        heading1="Frequently asked"
        heading2="Question"
      ></SectionTittle>
      <div className="md:flex justify-center items-center bg-opacity-60 pb-20 pt-12 px-36">
        <div></div>
        <div className="md:ml-10">
          <div className="collapse collapse-plus bg-green-500">
            <input type="radio" name="my-accordion-3" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              What subjects do you offer coaching for at your center?
            </div>
            <div className="collapse-content">
              <p>
                We offer coaching for four core subjects: Physics, Chemistry,
                Biology, and Math. Our instructors are experts in these fields
                and provide comprehensive support for students.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-green-500">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How are your classes structured?
            </div>
            <div className="collapse-content">
              <p>
                {" "}
                Our classes are typically organized in small groups to ensure
                individual attention. We follow a structured curriculum,
                covering key topics and providing ample practice through
                assignments and assessments.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-green-500">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What qualifications do your instructors hold?
            </div>
            <div className="collapse-content">
              <p>
                Our instructors are highly qualified and experienced. They hold
                advanced degrees in their respective subjects and have a proven
                track record of helping students achieve their academic goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
