import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
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

