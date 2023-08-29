import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectMongoose() {
  const _pwd = process.env.MONGO_PWD;
  const _database = "profile";

  const _user = process.env.USER1;

  const _cluster = "cluster0.t8co3rg.mongodb.net";
  const _uri = `mongodb+srv://${_user}:${_pwd}@${_cluster}/${_database}?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(_uri);
    const collections = (
      await mongoose.connection.db.listCollections().toArray()
    ).map((el) => el.name);
    console.log(`collections of '${_database}' db`, collections);
    return true;
  } catch (error) {
    console.error("Could not connect to mongoose", error);
    return false;
  }
}

export default connectMongoose;
