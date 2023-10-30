const mongoose = require("mongoose");

exports.connect = async () => {
  try {
    await mongoose.connect(process.env.CONNECTIONSTRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected.");
  } catch (error) {
    throw new Error(`Error to connect on database. ${error}`);
  }
};
