const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_STRING);

    console.log(`MongoDB is Connected! Yippeeee. ${conn}`);
  } catch (err) {
    console.error(`Bad News Bears owo. Caught error in config/db: ${err}`);
    process.exit(1);
  }
};

module.exports = connectDB;
