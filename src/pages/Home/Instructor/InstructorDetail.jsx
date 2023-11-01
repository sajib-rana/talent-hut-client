import { useLoaderData } from "react-router-dom";


const InstructorDetail = () => {
    const instructor = useLoaderData();
    const {about} = instructor;
    return (
        <div>
            <h1>{about}</h1>
        </div>
    );
};

export default InstructorDetail;