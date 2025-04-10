import { timeStamp } from "console"
import mongoose from mongoose


new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    Password:{
        type:String,
        required:true
    }
},
{timeStamps:true})

export const User = mongoose.model("User",userSchema)