import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true , "Username is required!"],
        unique:[true, "Username already Exist"],
        minLength : [3, "Username should atleast have 3 Characters"],
        maxLength : [15, "Username should atmost have 15 Characters"]
    },
    email: {
        type:String,
        required:[true , "Email is required!"],
        unique:[true, "Email already Exist"],
        match: [ /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ , "Email address is invalid!"],
    },
})

export const userModel = mongoose.models.User || mongoose.model("User", userSchema);