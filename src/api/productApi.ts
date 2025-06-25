import axios from "axios";
import type { Product } from "../types/Product";

export const fetchProducts = async(
    query: String,
    page: number,
    size: number
): Promise<{ content: Product[]; totalPages: number }> => {
    const res = await axios.get('/api/products', {
        params: { query, page, size },
    });
    return res.data;
};

export const fetchProductById = async (id: number): Promise<Product> => {
  const res = await axios.get(`/api/products/${id}`);
  return res.data;
};

export const createProduct = async (product: Product): Promise<Product> => {
  const res = await axios.post(`/api/products`, product);
  return res.data;
};