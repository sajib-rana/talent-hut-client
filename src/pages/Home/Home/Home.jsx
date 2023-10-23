import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Feedback from "../Feedback/Feedback";
import Courses from "../Courses/Courses";
import Instructor from "../Instructor/Instructor";
import Featured from "./Featured/Featured";


const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Talent Hut | Home</title>
        </Helmet>
        <Banner></Banner>
        <Courses></Courses>
        <Instructor></Instructor>
        <Featured></Featured>
        <Feedback></Feedback>
      </div>
    );
};

export default Home;