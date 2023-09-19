import { Link } from "react-router-dom";
import "./comment.css"

const Comment = ({comment}) => {
    const{id, name, email} = comment;
    return (
        <div className="comment-container">
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <Link to="/comment"> Show Details</Link>
        </div>
    );
};

export default Comment;