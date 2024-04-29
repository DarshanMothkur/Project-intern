
import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/users.js";
import questionRouter from "./routes/Question.js";
import answerRoutes from "./routes/Answers.js";
import Razorpay from "razorpay";

  
// This razorpayInstance will be used to 
// access any resource from razorpay 
const razorpayInstance = new Razorpay({ 
  
    // Replace with your key_id 
    key_id: rzp_test_fiIwmRET6CApc2, 
  
    // Replace with your key_secret 
    key_secret: YAEUthsup8SijNs3iveeVlL1 
});

dotenv.config();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use("/user", userRouter);
app.use("/questions", questionRouter);
app.use("/answer", answerRoutes);

// const DATABASE_URL = "mongodb+srv://kalgar812:Sagar%40123@cluster0.nrklggb.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })

  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((err) => console.log(err));



