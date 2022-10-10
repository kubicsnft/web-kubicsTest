import mongoose from "mongoose";

const connection = {};

const main = async () => {
  if (connection.isconected) {
    return;
  }

  const db = mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
  });
  //connection.isconected = db.connection[0].readyState;
  console.log("Connected to Kubics Mongo DB");
};

export default main;
