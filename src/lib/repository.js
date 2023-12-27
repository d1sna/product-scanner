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
      .insertOne({ name, description, price, productId });
  }

  async getProducts() {
    return await mongoose.connection.db
      .collection("products")
      .find({}, { sort: { _id: -1 } })
      .toArray();
  }

  async getProductById(id) {
    return await mongoose.connection.db
      .collection("products")
      .findOne({ productId: id });
  }
}

const repository = await Repository.init(process.env.MONGODB_URI);
export default repository;
