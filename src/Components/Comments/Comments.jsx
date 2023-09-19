import { useLoaderData } from "react-router-dom";
import Comment from "../Comment/Comment";
import "./Comments.css";


const Comments = () => {
    const comments = useLoaderData();
    return (
        <div>
            <h2>Total Comments: {comments.length}</h2>
            <div className="comments-container">
                {
                    comments.map(comment => <Comment comment={comment}></Comment>)
                }
            </div>          
        </div>
    );
};

export default Comments;