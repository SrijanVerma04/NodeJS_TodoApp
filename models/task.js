import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title : {
        required : true,
        type: String,
    },
    
    description : {
        required : true,
        type: String,
    },

    isCompleted: {
        type : Boolean,
        default : false,
    },

    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    createAt: {
        type: Date,
        default: Date.now,
    },
})

export const Task = mongoose.model("Task" , schema);