import { CapacitorHttp } from '@capacitor/core';
import axios from "axios";

class HttpClient {
  async createProduct({ image, name, description, price }) {
    const formData = new FormData();
    formData.append("file", image);
    formData.set("name", name);
    formData.set("description", description);
    formData.set("price", price);
    await CapacitorHttp.request({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_URL}/api/create-product`,
      data: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    });
  }

  async getProducts() {
    console.log(process.env.NEXT_PUBLIC_URL);
    const result = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/get-products`);
    return result.data;
  }

  async getProductById(id) {
    const result = await CapacitorHttp.request({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_URL}/api/get-product-by-id`,
      data: {id},
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    });
    return result.data;
  }
}

const httpClient = new HttpClient();
export default httpClient;
