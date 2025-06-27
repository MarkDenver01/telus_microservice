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
    const res = await axiosInstance.get('/public/products/page', {
        params: { query, page, size },
    });
    return res.data;
};

export const fetchAllProducts = async (): Promise<Product[]> => {
    const res = await axiosInstance.get('/public/products');
    return res.data; // Adjust if backend returns plain list
};

export const checkoutOrder = async ({
                                        name,
                                        address,
                                        contactNumber,
                                        deliveryDateStart,
                                        deliveryDateEnd,
                                        products,
                                    }: {
    name: string;
    address: string;
    contactNumber: string;
    deliveryDateStart: string;
    deliveryDateEnd: string;
    products: { productId: number }[];
}): Promise<{ message: string }> => {
    const res = await axiosInstance.post("/public/orders/checkout", {
        name,
        address,
        contactNumber,
        deliveryDateStart,
        deliveryDateEnd,
        products,
    });

    return res.data;
};
