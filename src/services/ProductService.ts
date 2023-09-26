import axios from 'axios';
import type Product from '@/interfaces/Product';

export default class ProductService {
  public static async getAll(): Promise<Product[]> {
    const apiUrl = 'http://127.0.0.1:8000/api/products';
    try {
      const response = await axios.get<Product[]>(apiUrl);
      const products: Product[] = response.data;
      console.log(products);
      return products;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}

