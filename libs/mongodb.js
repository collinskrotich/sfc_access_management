import mongoose from 'mongoose';

const Dbconnect = async () => {
    try {
        await mongoose.connect(processs.env.MONGO_URI)
        console.log("DB connected", )
        
    } catch (error) {
        
        console.log(error)
    }
}

export default Dbconnect();