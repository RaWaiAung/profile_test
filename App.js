const express = require("express");
const  cors = require("cors");
const mongoose = require("mongoose");
const processRouts = require("./routes/processRouts");
const app = express();
//DB
mongoose.connect('mongodb://localhost:27017/processes');
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database connected');
});

app.use(express.json());
app.use(cors());
app.use('/api/v1/task', processRouts);

app.listen(5000, () => {
  console.log(`Server Started at ${5000}`);
});
