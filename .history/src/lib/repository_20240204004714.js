import mongoose from "mongoose";
import * as Minio from "minio";
import saveFileFromForm from "./saveFileFromForm";

class Repository {
  constructor(s3, collection) {
    this.s3 = s3;
    this.collection = collection;
  }

  static async init() {
    await mongoose.connect(process.env.MONGODB_URI);
    const collection = mongoose.connection?.db.collection("products");
    if (!collection) await mongoose.connection.createCollection("products");

    const s3 = new Minio.Client({
      endPoint: process.env.MINIO_END_POINT,
      port: Number(process.env.MINIO_PORT),
      useSSL: false,
      accessKey: process.env.MINIO_ACCESS_KEY,
      secretKey: process.env.MINIO_SECRET_KEY,
    });

    const bucketExists = await s3.bucketExists("images");
    if (!bucketExists) await s3.makeBucket("images", "georgia");

    return new Repository(s3, collection);
  }

  async createProduct({ name, description, price, productId, file }) {
    // const matches = file.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    // const imageData = matches[2];

    // const buffer = Buffer.from(imageData, "base64");
    // await this.uploadFileToMinIO(buffer, productId);

    await saveFileFromForm(file, `public/${productId}.jpg`)
    return await this.collection.insertOne({
      name,
      description,
      price,
      productId,
    });
  }

  async getProducts() {
    const documents = await this.collection
      .find({}, { sort: { _id: -1 } })
      .toArray();

    const products = [];
    for (const document of documents) {
      const imageUrl = await this.getProductImageUrl(document.productId);
      products.push({ ...document, imageUrl });
    }

    return products;
  }

  async getProductById(id) {
    const document = await this.collection.findOne({ productId: id });

    if (!document) throw new Error("404");

    const imageUrl = await this.getProductImageUrl(document.productId);
    return { ...document, imageUrl };
  }

  async uploadFileToMinIO(buffer, productId) {
    return await this.s3.putObject("images", `${productId}`, buffer);
  }

  async getProductImageUrl(productId) {
    return await this.s3.presignedGetObject("images", `${productId}`);
  }
}

const repository = await Repository.init();
export default repository;
