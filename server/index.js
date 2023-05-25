const express = require("express");
const app = express();
const connect = require("./config/database");
const router = require("./routes/userRoutes");
const cors = require("cors");
connect();
app.use(cors());

app.use(express.json());
app.use("/", router);

app.listen(8000, () => {
  console.log("connected to port 8000");
});
