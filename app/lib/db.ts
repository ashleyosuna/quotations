import mongoose, { ConnectOptions } from "mongoose";

const uri = process.env.MONGODB_URI as string;

const connect = async function () {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);

    console.log("Connected to MongoDB!");
  } catch (error) {
    console.log("Failed to connect to database", error);
  }
};

export default connect;
