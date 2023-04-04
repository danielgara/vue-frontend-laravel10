import axios from 'axios';
import Product from '@/models/Product';
import { plainToClass } from "class-transformer";

export default class ProductService {
  public static async getAll(): Promise<Product[] | null> {
    const result = await axios.get('http://127.0.0.1:8000/api/products');
    const productsData = result.data;
    const products:Product[] = [];
    for (let i = 0; i < productsData.length; i += 1) {
      let product = plainToClass(Product, productsData[i] as Object);
      products.push(product);
    }
    return products;
  }
}

