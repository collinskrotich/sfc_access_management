import mongoose, {Schema} from "mongoose";

const accessSchema = new Schema(
    {
        fullName: String, 
        idNo: String,
        phoneNo: String, 
        reason: String,
        company: String,      
        department: String, 
        accessGranted: String,
        accessGrantedBy: String,
        timeIn: String,  
    },
    {
        timestamps: true,
    }
    
    );

const Access = mongoose.models.Access || mongoose.model("Access", accessSchema);

module.exports = Access;

