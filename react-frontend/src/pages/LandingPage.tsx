import { useEffect, useState } from "react";
import {type Product, fetchProducts, addToCart } from "../api";

export default function LandingPage() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts().then((data) => setProducts(data.products));
    }, []);

    const handleAddToCart = async (id: number) => {
        await addToCart(id, 1);
        alert("Added to cart");
    };

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {products.map((p) => (
                <div key={p.id} className="border p-2 rounded">
                    <h2 className="font-bold">{p.title}</h2>
                    <p>{p.brand}</p>
                    <p>${p.price}</p>
                    <p>Stock: {p.stock}</p>
                    <button onClick={() => handleAddToCart(p.id)} className="mt-2 bg-blue-500 text-white px-2 py-1 rounded">
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
}
