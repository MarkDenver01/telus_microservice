import React, { useState, useEffect } from 'react';
import axios from 'axios';
import type {CartItem} from '../types/Cart';

const CheckoutForm: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [form, setForm] = useState({
        name: '',
        address: '',
        contactNumber: '',
        deliveryRange: '',
    });
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        axios
            .get<CartItem[]>('/api/php/carts')
            .then((res) => setCartItems(res.data))
            .catch(() => alert('Failed to load cart items'));
    }, []);

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const payload = {
            ...form,
            items: cartItems,
            total: totalPrice,
        };

        try {
            await axios.post('/api/php/carts/checkout', payload);
            setSuccessMessage('Checkout successful! Thank you.');
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            alert('Checkout failed.');
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-6 p-4 border rounded shadow">
            <h2 className="text-xl font-bold mb-4">Checkout</h2>

            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <input
                            name="name"
                            placeholder="Full Name"
                            value={form.name}
                            onChange={handleInputChange}
                            className="w-full border p-2 rounded"
                            required
                        />
                        <input
                            name="address"
                            placeholder="Address"
                            value={form.address}
                            onChange={handleInputChange}
                            className="w-full border p-2 rounded"
                            required
                        />
                        <input
                            name="contactNumber"
                            placeholder="Contact Number"
                            value={form.contactNumber}
                            onChange={handleInputChange}
                            className="w-full border p-2 rounded"
                            required
                        />
                        <input
                            name="deliveryRange"
                            placeholder="Delivery Date Range (e.g., June 20–22)"
                            value={form.deliveryRange}
                            onChange={handleInputChange}
                            className="w-full border p-2 rounded"
                            required
                        />
                    </div>

                    <h3 className="font-semibold mt-6 mb-2">Items:</h3>
                    <ul className="text-sm space-y-1">
                        {cartItems.map((item) => (
                            <li key={item.productId}>
                                {item.title} x{item.quantity} — ₱{item.price * item.quantity}
                            </li>
                        ))}
                    </ul>

                    <p className="mt-4 font-bold">Total: ₱{totalPrice}</p>

                    <button
                        type="submit"
                        className="mt-4 w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
                    >
                        Confirm Checkout
                    </button>
                </form>
            )}

            {successMessage && <p className="text-green-600 mt-4">{successMessage}</p>}
        </div>
    );
};

export default CheckoutForm;
