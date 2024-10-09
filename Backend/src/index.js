import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});

// connecting to the database  mongodb method1
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("MongoDB connection error", error);
//       throw error;
//     });
//     console.log("MongoDB connected");
//     app.listen(process.env.PORT, () => {
//       console.log(`Server listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("error:", error);
//   }
// })();

// connecting to the database method2
connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("MongoDB connection error", error);
      throw error;
    });
    console.log("MongoDB connected");
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("error:", error);
  });
