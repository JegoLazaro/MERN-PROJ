import mongoose from "mongoose";


export const connectDB = async () => {
  try {
    await mongoose.connect(
        process.env.MONGO_URI,
    );

    console.log("MONGODB CONNECTED SUCCESFULLY");
  } catch (e) {
    console.error("ERR: Connecting to mongodb failed: ", e);
    process.exit(1) // exit w/ failure
  }
};
