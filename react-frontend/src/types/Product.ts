export interface Product {
    id: number;
    title: string;
    brand: string;
    category: string;
    price: number;
    rating: number;
    stock: number;
    shippingInformation: string;
    thumbnail?: string;
}