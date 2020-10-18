const express = require("express");
const mongoose = require("mongoose");
// const Vin= require('./models/vin')
const cors = require("cors");
require("dotenv").config();

// set up express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());
app.use(cors({ origin: true }));
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cardoc", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// set up routes
app.use("/users", require("./routes/userRouter"));
app.use(require("./routes/vin"));


app.listen(PORT, () => console.log(`The server has started on http://localhost:${PORT}`));