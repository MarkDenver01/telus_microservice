import axios from 'axios';
import type {CartItem} from '../types/Cart';

const API_URL = '/api/php/carts';

export const getCart = async (): Promise<CartItem[]> => {
    const res = await axios.get<CartItem[]>(API_URL);
    return res.data;
};

export const addToCart = async (item: Omit<CartItem, 'id' | 'total'> & { total?: number }): Promise<CartItem> => {
    const res = await axios.post(`${API_URL}/add`, item);
    return res.data;
};

export const deleteFromCart = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};
