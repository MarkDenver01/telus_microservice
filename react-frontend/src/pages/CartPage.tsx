import { useEffect, useState } from "react";
import {type CartItem, fetchCart, deleteFromCart, checkoutCart } from "../api";

interface CustomerInfo {
    name: string;
    address: string;
    contact: string;
    deliveryDate: string;
}

export default function CartPage() {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [customer, setCustomer] = useState<CustomerInfo>({
        name: "",
        address: "",
        contact: "",
        deliveryDate: "",
    });

    useEffect(() => {
        fetchCart().then((data) => setCart(data.carts));
    }, []);

    const handleDelete = async (id: number) => {
        const result = await deleteFromCart(id);
        setCart(result.cart);
    };

    const handleCheckout = async () => {
        const payload = {
            ...customer,
            items: cart.map(({ productId, price, quantity, title }) => ({
                productId,
                price,
                quantity,
                title,
            })),
        };
        await checkoutCart(payload);
        alert("Checkout successful");
        setCart([]);
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Cart</h1>
            {cart.map((item) => (
                <div key={item.id} className="flex justify-between border p-2">
                    <span>{item.title} x {item.quantity}</span>
                    <button onClick={() => handleDelete(item.id)} className="text-red-500">Remove</button>
                </div>
            ))}
            <div className="mt-4">
                <input placeholder="Name" onChange={(e) => setCustomer({ ...customer, name: e.target.value })} />
                <input placeholder="Address" onChange={(e) => setCustomer({ ...customer, address: e.target.value })} />
                <input placeholder="Contact" onChange={(e) => setCustomer({ ...customer, contact: e.target.value })} />
                <input placeholder="Delivery Date" onChange={(e) => setCustomer({ ...customer, deliveryDate: e.target.value })} />
                <button onClick={handleCheckout} className="mt-4 bg-green-500 text-white px-4 py-2">Checkout</button>
            </div>
        </div>
    );
}
