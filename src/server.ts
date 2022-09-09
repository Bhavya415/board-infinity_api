import express from "express";
import taskRouter from "./routes/tasks";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());

//using the taskRouter which contains all of our routes
app.use("/", taskRouter);

// just for testing
app.get("/", (req, res) => {
  res.send({
    message: "Hello Board Infinity!!!",
  });
});

const start = async () => {
  try {
    const res: any = await mongoose.connect(
      "mongodb+srv://Task_list:bhavya@cluster0.adtudpx.mongodb.net/test",
      // `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.iazpd.mongodb.net/?retryWrites=true&w=majority`,
      {}
    );
    console.log("MongoDB cloud atlas connected");
  } catch (err: any) {
    throw new Error(err);
  }
  app.listen(PORT, () => {
    console.log("Express server running at localhost at port " + PORT);
  });
};

start();
