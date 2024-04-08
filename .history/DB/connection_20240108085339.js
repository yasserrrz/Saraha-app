import mongoose from "mongoose";

const connection = async () => {
  try {
    await mongoose.connect("mongodb://1:27017/saraha", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected successfully");
  } catch (err) {
    console.error("Failed to connect with DB", err.message);
  }
};

export default connection;
