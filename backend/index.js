const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
const { connection } = require("./db");
const { userRoute } = require("./route/user.route");
const port = process.env.PORT || 3000;

app.use("/user", userRoute);
// Start the server
app.listen(port, async () => {
  try {
    await connection();
    console.log(`connection established to MongoDB Atlas
    \n Server is running at PORT ${port}`);
  } catch (error) {
    console.log("Error connecting to MongoDB Atlas", error);
  }
});
