const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/carros", carroRouter);
 
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
 
module.exports = app;

const mongoose = require("mongoose");

const carroRouter = require("./router/carroRouter");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/CRUD",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err){
      console.log(err);
    } else {
      console.log("conectado ao mongo");
    }
  }
);

