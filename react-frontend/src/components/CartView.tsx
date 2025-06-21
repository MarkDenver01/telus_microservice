import React, { useEffect, useState } from 'react';
import type {CartItem} from '../types/Cart';
import { getCart, deleteFromCart } from '../api/cartApi';

const CartView: React.FC = () => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [loading, setLoading] = useState(true);

    const loadCart = async () => {
        const data = await getCart();
        setCart(data);
        setLoading(false);
    };

    useEffect(() => {
        loadCart();
    }, []);

    const handleDelete = async (id: number) => {
        await deleteFromCart(id);
        loadCart();
    };

    const totalPrice = cart.reduce((sum, item) => sum + item.total, 0);

    if (loading) return <div>Loading cart...</div>;

    return (
        <div className="mt-6">
            <h2 className="text-lg font-bold mb-2">Your Cart</h2>
            {cart.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
                <div className="space-y-2">
                    {cart.map((item) => (
                        <div key={item.id} className="border p-2 rounded flex justify-between">
                            <div>
                                <div>{item.title}</div>
                                <div>₱{item.price} x {item.quantity}</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>₱{item.total}</div>
                                <button
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                    onClick={() => handleDelete(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="font-bold mt-4">Total: ₱{totalPrice}</div>
                </div>
            )}
        </div>
    );
};

export default CartView;
