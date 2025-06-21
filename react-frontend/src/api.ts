export interface Product {
    id: number;
    title: string;
    brand: string;
    category: string;
    price: number;
    rating: number;
    stock: number;
    shippingInformation?: string;
}

export interface CartItem {
    id: number;
    productId: number;
    title: string;
    price: number;
    quantity: number;
}

const API_BASE = "http://localhost";

export const fetchProducts = async (): Promise<{ products: Product[] }> =>
    (await fetch(`${API_BASE}/api/java/products`)).json();

export const fetchCart = async (): Promise<{ carts: CartItem[] }> =>
    (await fetch(`${API_BASE}/api/php/carts`)).json();

export const addToCart = async (productId: number, quantity = 1) =>
    (await fetch(`${API_BASE}/api/php/carts/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, quantity }),
    })).json();

export const deleteFromCart = async (id: number) =>
    (await fetch(`${API_BASE}/api/php/carts/${id}`, {
        method: "DELETE",
    })).json();

export const checkoutCart = async (payload: any) =>
    (await fetch(`${API_BASE}/api/php/carts/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    })).json();
