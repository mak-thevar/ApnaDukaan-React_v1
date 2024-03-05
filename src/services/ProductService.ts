import axios from "axios";
import { Product } from "../models/Product";

class ProductService {
    fetchProducts = async (): Promise<Product[]> => {
        const response = await axios.get('https://fakestoreapi.com/products');
        return response.data;
    }

    fetchCategories = async() : Promise<object[]>=>{
        const response = await axios.get("https://fakestoreapi.com/products/categories");
        return response.data;
    }
}

export const productService = new ProductService();