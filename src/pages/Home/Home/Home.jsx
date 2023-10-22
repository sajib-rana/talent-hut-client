import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Feedback from "../Feedback/Feedback";


const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Talent Hut | Home</title>
          
        </Helmet>
        <Banner></Banner>
        <Feedback></Feedback>
      </div>
    );
};

export default Home;