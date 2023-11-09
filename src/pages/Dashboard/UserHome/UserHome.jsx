import useAuth from "../../../hooks/useAuth";
import './userhome.css'


const UserHome = () => {
    const { user } = useAuth();
    return (
      <div>
        <div className="stage mx-auto my-5">
          <img className="ball" src={user.photoURL} alt="" />
        </div>
      </div>
    );
};

export default UserHome;