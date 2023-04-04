import axios from 'axios';

export default class ProductService {
  public static async getAll() {
    const result = await axios.get('http://127.0.0.1:8000/api/products');
    return result.data;
  }
}

