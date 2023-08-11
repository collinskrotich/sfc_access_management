import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    // {
    //     fullName: {
    //         type: String,
    //         required: [true, "fullname not provided"],
    //     },
    //     email: {
    //         type: String,
    //         unique: [true, "email already exists!"],
    //         lowercase: true,
    //         trim: true,
    //         required: [true, "email not provided"],
    //         validate: {
    //             validator: function (v) {
    //                 return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    //             },
    //             message: '{VALUE} is not a valid email!'
    //         }

    //     },
    //     role: {
    //         type: String,
    //         enum: ["normal", "admin"],
    //         required: [true, "Please specify user role"]
    //     },
    //     password: {
    //         type: String,
    //         required: true
    //     },
    //     created: {
    //         type: Date,
    //         default: Date.now
    //     }
    // },
    {
        fullname: String, 
        email: String, 
        role: String, 
        password: String, 
    },
    {
        timestamps: true,
    }
    
    );

const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;

