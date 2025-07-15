import mongoose , {Schema} from "mongoose";

const videoSchema = new Schema({
    videoFile: {
        type: String, //cloudinary file
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description: {
        type: Number,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},
    {timeStamps: true});

export const Video = mongoose.model("Video",videoSchema);