import mongoose from "mongoose";
import Comments from "../../client/src/components/details/comments/Comments";


const commentSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    postId:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    comments:{
        type: String,
        required: true
    }




})

const comment= mongoose.model('comment', commentSchema);

export default comment;