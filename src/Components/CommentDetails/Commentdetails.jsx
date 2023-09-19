import { useLoaderData } from "react-router-dom";


const Commentdetails = () => {
    const comment = useLoaderData();
    const {body} = comment;
    return (
        <div>
            <h2>details about comment</h2>
        </div>
    );
};

export default Commentdetails;