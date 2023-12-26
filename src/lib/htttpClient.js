import axios from "axios";

class HttpClient {
  async createProduct({ image, name, description, price }) {
    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.set("name", name);
      formData.set("description", description);
      formData.set("price", price);

      await axios.post("/api/create-product", formData);
    } catch (error) {
      console.log(error);
    }
  }

  async getProducts() {
    try {
      const result = await axios.get("/api/get-products");
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
}

const httpClient = new HttpClient();
export default httpClient;
