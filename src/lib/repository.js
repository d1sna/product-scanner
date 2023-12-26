import mongoose from "mongoose";

class Repository {
  constructor() {}

  static async init(MONGODB_URI) {
    mongoose.connect(MONGODB_URI);
    await mongoose.connection.createCollection("products");
    return new Repository();
  }

  async createProduct({ name, description, price, productId }) {
    return await mongoose.connection.db
      .collection("products")
      .insertOne({ name, description, price, _id: productId });
  }

  async getProducts() {
    return await mongoose.connection.db.collection("products").find().toArray();
  }
}

const repository = await Repository.init(
  "mongodb://your_root_username:your_root_password@localhost:27017"
);
export default repository;
