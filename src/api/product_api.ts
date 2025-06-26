import axiosInstance from "./api_client";
import type { Product } from "../types/Product";

export const searchProduct = async (
    q: string,
    page: number,
    size: number
): Promise<{ content: Product[]; totalPages: number; size: number }> => {
    const response = await axiosInstance.get('/public/search', {
        params: { q, page, size }
    });
    return response.data;
};

export const fetchPaginatedProduct = async (
    query: string,
    page: number,
    size: number
): Promise<{ content: Product[]; totalPages: number }> => {
    const res = await axiosInstance.get('/public/products', {
        params: { query, page, size },
    });
    return res.data;
};

export const fetchAllProducts = async (): Promise<Product[]> => {
    const res = await axiosInstance.get('/public/products');
    return res.data.content; // Adjust if backend returns plain list
};
