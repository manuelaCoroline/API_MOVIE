import mongoose from "mongoose";

const connectDB=async()=>{
  try {
    await mongoose.connect(process.env.MONGO_URI);
console.log(`connection reussi`);
    
  } catch (error ) {
  console.log(`connection echoue😒${error.message}`)
    
  }
}
export default connectDB();