import mongoose from "mongoose";

const connect = async () => {
  try
  {
    mongoose.set("strictQuery", false)
    await mongoose.connect(
      "mongodb+srv://sachin:santacruz@cluster0.74thgvu.mongodb.net/thenga?retryWrites=true&w=majority"
    )
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
