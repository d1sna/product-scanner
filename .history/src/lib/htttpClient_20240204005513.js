import axios from "axios";

class HttpClient {
  async createProduct({ image, name, description, price }) {
    const formData = new FormData();
    formData.append("file", image);
    formData.set("name", name);
    formData.set("description", description);
    formData.set("price", price);
    await axios.post(`${process.env.PUBLIC_URL}/api/create-product`, formData);
  }

  async getProducts() {
    const result = await axios.get(`${process.env.PUBLIC_URL}/api/get-products`);
    return result.data;
  }

  async getProductById(id) {
    const result = await axios.post(`${process.env.PUBLIC_URL}/api/get-product-by-id`, { id });
    return result.data;
  }
}

const httpClient = new HttpClient();
export default httpClient;
