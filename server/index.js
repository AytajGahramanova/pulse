const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/*+json" }));

const { Schema } = mongoose;

const user = new Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: String, required: true },
});

const User = mongoose.model("User", user);

app.post("/menu", async (req, res) => {
  try {
    const { name, desc, price } = req.body;
    const user = new User({
      name,
      desc,
      price,
    });
    user.save();
    res.status(200).send({ message: "success", data: user });
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.get("/menu", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send({ data: users });
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.get("/menu/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const users = await User.findById(id);
    res.status(200).send({ data: users });
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.delete("/menu/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      res.status(404).send({ message: "user not found" });
    }
    res.status(200).send({ data: user });
  } catch (error) {
    res.status(500).send({ error });
  }
});

const PORT = process.env.PORT;
const DB = process.env.DB_URL;

mongoose.connect(DB).then(() => console.log("Connected!"));

app.listen(PORT, () => {
  console.log(`Port is running on ${PORT}`);
});
