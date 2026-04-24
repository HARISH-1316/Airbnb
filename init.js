const mongoose = require("mongoose");
main()
  .then(() => {
    console.log("Mongoose connected successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Airbnb");
}

let data = require("./data.js");

const Listing = require("./Models/Listing.js");

const insertData = async () => {
  await Listing.deleteMany();

  data = data.map((obj) => ({
    ...obj,
    owner: new mongoose.Types.ObjectId("69e268260620796baa6e54d7"),
  }));

  await Listing.insertMany(data);
};

insertData();
